import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend
} from "recharts"

const data = [

    {
        name: "Atividade Biológica",
        antes: 45,
        depois: 80
    },

    {
        name: "Diversidade Microbiana",
        antes: 40,
        depois: 75
    },

    {
        name: "Matéria Orgânica",
        antes: 2,
        depois: 5
    },

    {
        name: "pH do Solo",
        antes: 6,
        depois: 7
    },

    {
        name: "Nitrogênio",
        antes: 120,
        depois: 190
    }

]

export default function SoilComparisonChart() {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-semibold mb-6">

                Comparativo Antes vs Depois - Metabiom

            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar dataKey="antes" fill="#ef4444" />

                    <Bar dataKey="depois" fill="#22c55e" />

                </BarChart>

            </ResponsiveContainer>

        </div>

    )

}