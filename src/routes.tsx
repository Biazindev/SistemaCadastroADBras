import { Route, Routes } from "react-router-dom"

import Contato from "./components/Contato"


const Rotas = () =>  (

    <Routes>
        <Route path='/' element={<Contato />} />
    </Routes>
    )

    export default Rotas