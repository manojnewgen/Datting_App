using Microsoft.EntityFrameworkCore;

namespace DatingApp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DbSet<User> Users { get; set; }
    }

}