import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Home, SingleProduct, Login, Signup, NotFound, Dashboard, PostItem, CarritoCompras } from '../Pages/index'

const RoutsIndex = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':productId' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={ isAuth ? <Dashboard/> : <Navigate to='/login' replace/> }/>
        <Route path='/postItem' element={<PostItem/>}/>
        <Route path='/buy' element={ isAuth ? <CarritoCompras/> : <Navigate to='/login' replace/> }/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default RoutsIndex