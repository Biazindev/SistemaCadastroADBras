import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import { Provider } from "react-redux"

import { GlobalCss } from "./styles"

function App() {
  return (
    
    <>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
