import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListaTareas } from "./components/ListaTareas"
export const App = () => {
 
  return (
    <div className="container mx-auto"> 
        <Header />
        <Form />
        <ListaTareas />        
    </div>
  )
}
