import { useEffect, useState } from "react"

type Tanque = {
  id?: number
  nome?: string
  nivel?: number
  nivelAtual?: number
}

export default function TankPanel() {

  const [tanques, setTanques] = useState<Tanque[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const carregarTanques = async () => {

    try {

      const response = await fetch("http://localhost:5126/api/tanques")

      if (!response.ok) {
        throw new Error("Erro ao buscar tanques")
      }

      const data: Tanque[] = await response.json()

      setTanques(data)

    } catch (error) {

      console.error("Erro ao carregar tanques:", error)

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {
    carregarTanques()
  }, [])

  if (loading) {

    return (

      <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
        Carregando tanques...
      </div>

    )

  }

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between mb-4">

        <div>

          <h2 className="font-semibold text-lg">
            Tanques CRB
          </h2>

          <p className="text-sm text-gray-500">
            Gerenciar tanques de produção
          </p>

        </div>

      </div>

      {tanques.length === 0 && (

        <div className="text-center text-gray-500 py-10">
          Nenhum tanque cadastrado
        </div>

      )}

      {tanques.length > 0 && (

        <div className="space-y-4">

          {tanques.map((tanque, index) => {

            const nivel = tanque.nivel ?? tanque.nivelAtual ?? 0

            return (

              <div
                key={tanque.id ?? index}
                className="border rounded-lg p-4 flex justify-between items-center"
              >

                <div>

                  <p className="font-medium">
                    {tanque.nome ?? "Tanque"}
                  </p>

                  <p className="text-sm text-gray-500">
                    Nível: {nivel}%
                  </p>

                </div>

                <div className="w-40 bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-green-500 h-3 rounded-full transition-all"
                    style={{ width: `${nivel}%` }}
                  />

                </div>

              </div>

            )

          })}

        </div>

      )}

    </div>

  )

}