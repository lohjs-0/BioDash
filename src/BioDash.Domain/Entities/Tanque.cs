namespace BioDash.Domain.Entities;

public class Tanque
{
    public Guid Id { get; set; }

    public string Nome { get; set; }

    public double CapacidadeLitros { get; set; }

    public double NivelAtual { get; set; }

    public DateTime UltimoCiclo { get; set; }

    public bool Ativo => NivelAtual > 0;
}