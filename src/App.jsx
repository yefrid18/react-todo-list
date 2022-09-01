import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListaTareas } from "./components/ListaTareas"
export const App = () => {
 
  return (
    <div className=""> 
        <Header />
        <Form />
        <ListaTareas />        
    </div>
  )
}
