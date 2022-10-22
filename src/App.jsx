import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './Pages/Home'
import { SingleProduct } from './Pages/SingleProduct';


export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path=':productId' element={<SingleProduct/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

