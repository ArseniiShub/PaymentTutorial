using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<PaymentDetail> PaymentDetails { get; set; } = null!;
}