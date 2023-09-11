import React from "react"
import { ListaJuego} from "./Juegos/components/ListaJuego"
import { CreateJuego} from "./Juegos/components/CreateJuego";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaJuego></ListaJuego>}></Route>
          <Route path='/agregarJuego' element={<CreateJuego></CreateJuego>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
