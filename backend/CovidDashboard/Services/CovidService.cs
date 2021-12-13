#region usings

using System.Collections.Generic;
using System.Linq;

using CovidDashboard.Models;

#endregion

namespace CovidDashboard.Services
{
    public class CovidService
    {
        public Dictionary<string, int> CasesPieDataMax { get; set; } = null!;

        public Dictionary<string, int> CasesPieDataSum { get; set; } = null!;
        public Dictionary<string, LabeledValues> CasesTimeline { get; set; } = null!;

        public LabeledValues GetStateMaxData()
        {
            return new LabeledValues
            {
                Labels = CasesPieDataMax.Keys.ToList(),
                Values = CasesPieDataMax.Values.ToList()
            };
        }

        public LabeledValues GetStateSumData()
        {
            return new LabeledValues
            {
                Labels = CasesPieDataSum.Keys.ToList(),
                Values = CasesPieDataSum.Values.ToList()
            };
        }

        public LabeledValues? GetStateTimeline(string state)
        {
            return CasesTimeline.TryGetValue(state, out LabeledValues? timeline)
                ? timeline
                : null;
        }
    }
}
