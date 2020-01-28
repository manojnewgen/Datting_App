using System.Linq;
using AutoMapper;
using DatingApp.Dtos;
using DatingApp.Models;

namespace DatingApp.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserForListDto>()
            .ForMember(dest=>dest.PhotoURL, 
                      opt=> opt.MapFrom(src=> src.Photos.FirstOrDefault(p=>p.IsMain).Url) )
            .ForMember(dest=>dest.Age, 
                      opt=> opt.MapFrom(src=> src.DateOfBirth.CalculateAge()) );    
            CreateMap<User, UserForDetailedDto>()
             .ForMember(dest=>dest.PhotoURL, 
                      opt=> opt.MapFrom(src=> src.Photos.FirstOrDefault(p=>p.IsMain).Url) )
            .ForMember(dest=>dest.Age, 
                      opt=> opt.MapFrom(src=> src.DateOfBirth.CalculateAge()) );
            CreateMap<Photo, PhotoForDetailedDto>();
        }
    }
}