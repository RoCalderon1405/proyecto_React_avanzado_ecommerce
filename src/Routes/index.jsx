import React from 'react'
// import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, SingleProduct, Login, Signup, NotFound } from '../Pages/index'

const RoutsIndex = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':productId' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default RoutsIndex