import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListaTareas } from "./components/ListaTareas"

export const App = () => {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState({})
 
  return (
    <div className="container mx-auto mt-20"> 
        <Header />
        <div className="mt-12 md:flex">
        <Form 
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <ListaTareas 
          tareas={tareas}
          setTarea={setTarea}
        />     
        </div>   
    </div>
  )
}
