import MetricCard from "../components/MetricCard"
import TankPanel from "../components/TankPanel"
import AlertsPanel from "../components/AlertsPanel"
import SoilComparisonChart from "../components/SoilComparisonChart"
import CycleChart from "../components/CycleChart"
import SustainabilityPanel from "../components/SustainabilityPanel"

export default function Dashboard() {

    return (

        <div className="p-10 space-y-6">

            <h1 className="text-3xl font-bold">

                BioDash

            </h1>

            <p className="text-gray-500">
                Monitoramento de Biofertilizantes On-Farm
            </p>

            <div className="grid grid-cols-4 gap-6">

                <MetricCard title="Tanques Ativos" value="0" icon="💧" />
                <MetricCard title="Fertilizante Evitado" value="0.0 kg" icon="🌱" />
                <MetricCard title="Redução CO2" value="0.0 kg" icon="⚡" />
                <MetricCard title="Ciclos Concluídos" value="0" icon="📈" />

            </div>

            <div className="grid grid-cols-3 gap-6">

                <div className="col-span-2">

                    <TankPanel />

                </div>

                <AlertsPanel />

            </div>

            <div className="grid grid-cols-3 gap-6">

                <div className="col-span-2">

                    <SoilComparisonChart />

                </div>

                <SustainabilityPanel />

            </div>

            <CycleChart />

        </div>

    )

}