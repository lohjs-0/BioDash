using Microsoft.EntityFrameworkCore;
using BioDash.Domain.Entities;

namespace BioDash.Infrastructure.Data;

public class BioDashDbContext : DbContext
{
    public BioDashDbContext(DbContextOptions<BioDashDbContext> options)
        : base(options)
    {
    }

    public DbSet<Tanque> Tanques { get; set; }

    public DbSet<CicloProducao> Ciclos { get; set; }
}