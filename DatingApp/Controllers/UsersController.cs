using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.Data;
using DatingApp.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IDatingRepository rep, IMapper mapper)
        {
            this._mapper = mapper;
            this._repo = rep;

        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await this._repo.GetUsers();
             var UserToReturn =_mapper.Map <IEnumerable<UserForListDto>>(users);
            return Ok(UserToReturn);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var users = await this._repo.GetUser(id);
            var UserToReturn =_mapper.Map<UserForDetailedDto>(users);
            return Ok(UserToReturn);
        }
    }
}