type Props = {
    title: string
    value: string
    icon: string
}

export default function MetricCard({ title, value, icon }: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <div className="flex items-center gap-2 text-gray-600 text-sm">

                <span>{icon}</span>
                <span>{title}</span>

            </div>

            <p className="text-3xl font-bold mt-4">
                {value}
            </p>

        </div>

    )

}