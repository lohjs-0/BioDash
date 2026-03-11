using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BioDash.Infrastructure.Data;
using BioDash.Domain.Entities;

namespace BioDash.WebAPI.Controllers;

[ApiController]
[Route("api/tanques")]
public class TanquesController : ControllerBase
{
    private readonly BioDashDbContext _context;

    public TanquesController(BioDashDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Tanque>> Get()
    {
        return await _context.Tanques.ToListAsync();
    }

    [HttpPost]
    public async Task<IActionResult> Criar(Tanque tanque)
    {
        _context.Tanques.Add(tanque);

        await _context.SaveChangesAsync();

        return Ok(tanque);
    }
}