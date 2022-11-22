import React from 'react'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './Pages/NavBar';
import { SearchItemProvaider } from './context/SearchContext';
import RoutsIndex from './Routes';
import { AuthProvider } from './context/AuthContext';


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <SearchItemProvaider>
            <NavBar />
            <RoutsIndex />
          </SearchItemProvaider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

