using System;
using System.Text;
using System.Security.Claims;
using System.Threading.Tasks;
using DatingApp.Data;
using DatingApp.Dtos;
using DatingApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;


namespace DatingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]// It will prevent from using  FromBody 
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration IConfig)
        {
            _repo = repo;
            _config = IConfig;

        }
        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            if (!ModelState.IsValid)
            {
                if (userForRegisterDto.Username == null || userForRegisterDto.Username == null)
                    BadRequest("Usename or passsword is null");
            }

            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            if (await _repo.UserExists(userForRegisterDto.Username))
                BadRequest("User Already does exists");

            var userToCreate = new User
            {
                Username = userForRegisterDto.Username

            };

            var CeatetedUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);


        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserForLoginDto userforlogintto)
        {

            // throw new Exception("Computer says no");
            var userFromRepo = await _repo.Login(userforlogintto.Username.ToLower(), userforlogintto.Password);

            if (userFromRepo == null)
                return Unauthorized();

            var claim = new[]{
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
                 };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSetting:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claim),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds

            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });


            // throw new Exception("Invalid exception");

        }
    }
}