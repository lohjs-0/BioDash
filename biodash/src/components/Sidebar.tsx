type Props = {
    setPage: (page: string) => void
}

export default function Sidebar({ setPage }: Props) {

    return (

        <div className="w-64 bg-white shadow-md p-6">

            <h1 className="text-2xl font-bold mb-10">
                🌱 BioDash
            </h1>

            <nav className="space-y-4">

                <div
                    className="cursor-pointer hover:text-green-600"
                    onClick={() => setPage("dashboard")}
                >
                    Dashboard
                </div>

                <div
                    className="cursor-pointer hover:text-green-600"
                    onClick={() => setPage("tanques")}
                >
                    Tanques
                </div>

                <div
                    className="cursor-pointer hover:text-green-600"
                    onClick={() => setPage("solo")}
                >
                    Solo
                </div>

                <div
                    className="cursor-pointer hover:text-green-600"
                    onClick={() => setPage("relatorios")}
                >
                    Relatórios
                </div>

            </nav>

        </div>

    )

}