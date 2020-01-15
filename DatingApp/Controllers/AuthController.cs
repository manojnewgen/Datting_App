using System.Threading.Tasks;
using DatingApp.Data;
using DatingApp.Dtos;
using DatingApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]// It will prevent from using  FromBody 
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }
        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
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
    }
}