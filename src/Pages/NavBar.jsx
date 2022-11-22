import React from 'react'
import { Link } from 'react-router-dom'
import { useSearchContext } from '../context/SearchContext'
import '../App.css'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


export const NavBar = () => {

    const { isAuth, logout } = useContext(AuthContext)
    const searchItemContext = useSearchContext()

    const handleInputChange = (e) => {
        searchItemContext.setSearch(e.target.value)
    }

    const handleClean = () => {
        searchItemContext.setSearch("")
    }

    return (
        <>
            <div className="navBar-header">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-brand"><b>E-commerce</b></div>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                id='item'
                                type="input"
                                placeholder="Search"
                                name="item"
                                value={searchItemContext.search}
                                onChange={handleInputChange}
                            />
                            <button
                                className="btn btn-outline-success"
                                type="button"
                                onClick={() => handleClean()}
                            >Clear
                            </button>
                        </form>
                    </div>
                </nav>
                {
                    !isAuth ?

                        <ul id='header__nav-list'>
                            <ul className='header__item-list'>
                                <Link to='/signup' className='header__item-link'>Crea tu cuenta</Link>
                            </ul>
                            <ul className='header__item-list'>
                                <Link to='/login' className='header__item-link'>Ingresa</Link>
                            </ul>
                        </ul>

                        :

                        <ul id='header__nav-list'>
                            <ul className='header__item-list'>
                                <Link to='/' className='header__item-link' onClick={logout}>Cerrar sesión</Link>
                            </ul>
                        </ul>

                }
            </div>
        </>
    )
}