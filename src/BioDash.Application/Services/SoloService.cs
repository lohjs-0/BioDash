using BioDash.Domain.Entities;

namespace BioDash.Application.Services;

public class SoloService
{
    public double CalcularMelhoria(double antes, double depois)
    {
        if (antes == 0)
            return 0;

        return ((depois - antes) / antes) * 100;
    }

    public double CalcularReducaoFertilizante(double areaHectares)
    {
        return areaHectares * 30;
    }

    public double CalcularReducaoCO2(double fertilizanteEvitado)
    {
        return fertilizanteEvitado * 1.8;
    }
}