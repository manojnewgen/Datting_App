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
    }
}