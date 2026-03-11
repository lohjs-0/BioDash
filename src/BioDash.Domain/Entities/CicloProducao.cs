namespace BioDash.Domain.Entities;

public class CicloProducao
{
    public Guid Id { get; set; }

    public Guid TanqueId { get; set; }

    public DateTime Inicio { get; set; }

    public DateTime Fim { get; set; }

    public int DuracaoHoras => (Fim - Inicio).Hours;

    public bool Concluido => DateTime.Now >= Fim;
}