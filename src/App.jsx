import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListaTareas } from "./components/ListaTareas"
export const App = () => {
 
  return (
    <div className="container mx-auto mt-20"> 
        <Header />
        <div className="mt-12 md:flex">
        <Form />
        <ListaTareas />     
        </div>   
    </div>
  )
}
