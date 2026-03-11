export default function Solo(){

  return(

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
      Saúde do Solo
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Nitrogênio</h2>
          <p className="text-2xl font-bold">62%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Fósforo</h2>
          <p className="text-2xl font-bold">48%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Potássio</h2>
          <p className="text-2xl font-bold">71%</p>
        </div>

      </div>

    </div>

  )

}