import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend
} from "recharts"

const data = [

    { tempo: "0h", bio: 45, micro: 38 },
    { tempo: "2h", bio: 52, micro: 45 },
    { tempo: "4h", bio: 65, micro: 58 },
    { tempo: "6h", bio: 75, micro: 70 },
    { tempo: "8h", bio: 83, micro: 76 }

]

export default function CycleChart() {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-semibold mb-6">
                Evolução Durante o Ciclo de 8h
            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="tempo" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="bio"
                        stroke="#3b82f6"
                    />

                    <Line
                        type="monotone"
                        dataKey="micro"
                        stroke="#10b981"
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    )

}