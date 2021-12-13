#region usings

using System.Collections.Generic;

#endregion

namespace CovidDashboard.Models;

public class LabeledValues
{
    public List<string>? Labels { get; set; }

    public List<int>? Values { get; set; }
}
