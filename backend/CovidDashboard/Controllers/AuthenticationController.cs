#region usings

using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

using CovidDashboard.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

#endregion

namespace CovidDashboard.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    [AllowAnonymous]
    [HttpGet("Authenticate")]
    public IActionResult Authenticate(string pw)
    {
        var result = new AuthDto
        {
            Success = false,
            Token = "",
        };
        if (!pw.Equals("letmein"))
            return Ok(result);
        
        
        var handler = new JwtSecurityTokenHandler();
        byte[] key = Encoding.ASCII.GetBytes("verysecret32bitlongkey");
        var descriptor = new SecurityTokenDescriptor
        {
            Expires = DateTime.UtcNow.AddHours(4),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        SecurityToken? token = handler.CreateToken(descriptor);
        result.Token = handler.WriteToken(token);
        result.Success = true;

        return Ok(result);
    }
}
