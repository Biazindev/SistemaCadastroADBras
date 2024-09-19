import { BrowserRouter } from "react-router-dom"

import { GlobalCss } from "./styles"
import Contato from "./components/Contato"

function App() {
  return (
    
      <BrowserRouter>
        <GlobalCss />
        <Contato />
      </BrowserRouter>
  )
}

export default App
