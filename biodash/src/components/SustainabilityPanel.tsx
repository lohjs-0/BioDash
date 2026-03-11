export default function SustainabilityPanel() {

    return (

        <div className="bg-white rounded-xl shadow p-6 space-y-6">

            <h2 className="font-semibold">

                Calculadora de Sustentabilidade

            </h2>

            <div className="grid grid-cols-2 gap-4">

                <div className="bg-green-100 p-4 rounded-lg">

                    <p className="text-sm text-gray-600">
                        Fertilizante Evitado
                    </p>

                    <p className="text-2xl font-bold">
                        0.0
                    </p>

                    <p className="text-xs">
                        kg de NPK químico
                    </p>

                </div>

                <div className="bg-blue-100 p-4 rounded-lg">

                    <p className="text-sm text-gray-600">
                        Redução CO2
                    </p>

                    <p className="text-2xl font-bold">
                        0.0
                    </p>

                    <p className="text-xs">
                        kg de CO2e
                    </p>

                </div>

            </div>

            <div className="text-sm text-gray-600">

                <p>🌳 Árvores plantadas: 0.0</p>

                <p>⛽ Combustível economizado: 0.0L</p>

                <p>☀ Dias de energia solar: 0.0</p>

            </div>

        </div>

    )

}