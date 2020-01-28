using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.Helpers
{
    public static class Extension
    {
        public static void AddApllicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Apllication-error", message);
            response.Headers.Add("Access-Control-Expose-Header", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static int CalculateAge(this DateTime theDateTime){
            var age= DateTime.Today.Year-theDateTime.Year;
            if(theDateTime.AddYears(age)> DateTime.Today){
                age--;
            }
            return age;
        }
    }
}