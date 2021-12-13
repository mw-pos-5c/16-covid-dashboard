#region usings

using CovidDashboard.Services;

using Microsoft.AspNetCore.Mvc;

#endregion

namespace CovidDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CovidController : ControllerBase
    {
        #region Constants and Fields

        private readonly CovidService service;

        #endregion

        public CovidController(CovidService service)
        {
            this.service = service;
        }

        [HttpGet("GetStateSumData")]
        public IActionResult GetStateSumData()
        {
            return Ok(service.GetStateSumData());
        }

        [HttpGet("GetTimeline")]
        public IActionResult GetTimeline()
        {
            return Ok(service.GetStateTimeline("Salzburg"));
        }
    }
}
