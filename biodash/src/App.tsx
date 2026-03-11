import { useState } from "react"
import Sidebar from "./components/Sidebar"

import Dashboard from "./pages/Dashboard"
import Tanques from "./pages/Tanques"
import Solo from "./pages/Solo"
import Relatorios from "./pages/Relatorios"

export default function App(){

  const [page,setPage] = useState("dashboard")

  function renderPage(){

    if(page==="dashboard") return <Dashboard/>
    if(page==="tanques") return <Tanques/>
    if(page==="solo") return <Solo/>
    if(page==="relatorios") return <Relatorios/>

  }

  return(

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar setPage={setPage}/>

      <div className="flex-1">

        {renderPage()}

      </div>

    </div>

  )

}