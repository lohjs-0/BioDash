export default function Tanques(){

  const tanques = [

    {id:1,nome:"Tanque A",nivel:80},

    {id:2,nome:"Tanque B",nivel:55},

    {id:3,nome:"Tanque C",nivel:30}

  ]

  return(

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
      Tanques
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {tanques.map(tanque=>(

          <div
          key={tanque.id}
          className="bg-white p-6 rounded-xl shadow"
          >

            <h2 className="font-semibold mb-4">
              {tanque.nome}
            </h2>

            <div className="w-full bg-gray-200 rounded-full h-4">

              <div
              className="bg-green-500 h-4 rounded-full"
              style={{width:`${tanque.nivel}%`}}
              />

            </div>

            <p className="mt-2 text-sm text-gray-600">

              {tanque.nivel}% cheio

            </p>

          </div>

        ))}

      </div>

    </div>

  )

}