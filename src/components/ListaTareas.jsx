import { Tareas } from "./Tareas"

Tareas
export const ListaTareas = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center mb-10">
        Lista de Tareas
      </h2>
    <Tareas />
    <Tareas />
    <Tareas />
    </div>
  )
}
