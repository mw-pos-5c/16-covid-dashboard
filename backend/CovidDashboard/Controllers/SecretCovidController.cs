#region usings

using CovidDashboard.Services;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

#endregion

namespace CovidDashboard.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class SecretCovidController : ControllerBase
{
    #region Constants and Fields

    private readonly CovidService service;

    #endregion

    public SecretCovidController(CovidService service)
    {
        this.service = service;
    }

    [HttpGet("GetStateMaxData")]
    public IActionResult GetStateMaxData()
    {
        return Ok(service.GetStateMaxData());
    }

    [HttpGet("GetTimeline")]
    public IActionResult GetTimeline()
    {
        return Ok(service.GetStateTimeline("Oberösterreich"));
    }
}
