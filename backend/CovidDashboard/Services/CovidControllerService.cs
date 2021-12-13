#region usings

using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

using CovidDashboard.Models;

using Microsoft.Extensions.Hosting;

#endregion

namespace CovidDashboard.Services;

public class CovidControllerService : IHostedService
{
    #region Constants and Fields

    private readonly CovidService service;

    #endregion

    public CovidControllerService(CovidService service)
    {
        this.service = service;
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        return Task.Run(LoadData, cancellationToken);
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }

    private void LoadData()
    {
        using (var stream = new StreamReader("csv/CovidFaelle_Timeline.csv"))
        {
            var casesDict = new Dictionary<string, LabeledValues>();
            var highestCasesDict = new Dictionary<string, int>();
            var sumCasesDict = new Dictionary<string, int>();
            string? line;
            string[] data;
            stream.ReadLine();
            while ((line = stream.ReadLine()) != null)
            {
                data = line.Split(';');
                if (data.Length != 12) continue;

                string date = data[0];
                string state = data[1];
                int value = int.Parse(data[4]);
                if (state.Equals("Österreich"))
                {
                    continue;
                }

                if (!casesDict.TryGetValue(state, out LabeledValues? chartData))
                {
                    chartData = new LabeledValues
                    {
                        Labels = new List<string>(),
                        Values = new List<int>()
                    };
                    casesDict[state] = chartData;
                }

                chartData.Labels?.Add(date.Split(' ')[0]);
                chartData.Values?.Add(value);

                highestCasesDict[state] = Math.Max(highestCasesDict.GetValueOrDefault(state, 0), value);
                sumCasesDict[state] = highestCasesDict.GetValueOrDefault(state, 0) + value;
            }

            service.CasesTimeline = casesDict;
            service.CasesPieDataMax = highestCasesDict;
            service.CasesPieDataSum = sumCasesDict;
        }
    }
}
