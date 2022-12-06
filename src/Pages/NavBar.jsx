import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSearchContext } from '../context/SearchContext'
import '../App.css'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { getSingleUser } from '../Services/userServices'
import { ReactComponent as Carrito } from "../Assets/carritoCompras.svg";
import { ReactComponent as User } from '../Assets/User.svg'



export const NavBar = () => {

    const { isAuth, user, logout } = useContext(AuthContext)
    const [UserData, setUserData] = useState({})
    const searchItemContext = useSearchContext()

    const handleInputChange = (e) => {
        searchItemContext.setSearch(e.target.value)
    }

    const handleClean = () => {
        searchItemContext.setSearch("")
    }


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const result = await getSingleUser(user.id)
                if (result.status === 200) {
                    setUserData(result.data)
                    // console.log(result.data)
                }
            } catch (error) {
                console.log('Ocurrió un error: ' + error.message)
            }
        }
        fetchUserData()

    }, [isAuth])

    return (
        <>
            <div className="navBar-header">
                <nav className="navbar">
                    <div className="container-fluid header__items-tittleInput">
                        <Link className="navbar-brand" to='/'><b>TONALI</b></Link>
                        <form className="d-flex input" role="search">
                            <input
                                className="form-control me-2"
                                id='item'
                                type="input"
                                placeholder="Buscador"
                                name="item"
                                value={searchItemContext.search}
                                onChange={handleInputChange}
                            />
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => handleClean()}
                            >Clear
                            </button>
                        </form>
                    </div>
                </nav>
                {
                    !isAuth ?

                        <div className='container-fluid header__items-all' id='header__items-allLogout'>
                            <ul id='header__nav-list'>
                                <ul className='header__item-list'>
                                    <Link to='/signup' className='header__item-link'>Crea tu cuenta</Link>
                                </ul>
                                <ul className='header__item-list'>
                                    <Link to='/login' className='header__item-link'>Ingresa</Link>
                                </ul>
                                <ul className='header__item-list'>
                                    <Link to='/buy'> <Carrito className='carrito' /> </Link>
                                </ul>
                            </ul>
                        </div>

                        :
                        <div className='container-fluid header__items-all'>
                            <div className='header__item-link'>
                                <div className='header__nav-bienvenidauser'>
                                    <Link to='/dashboard' className='header__item-link'>
                                        <User className='carrito' /> {UserData.first_name} {UserData.last_name}
                                    </Link>
                                </div>
                            </div>
                            <ul id='header__nav-list'>
                                <ul className='header__item-list'>
                                    {
                                        UserData.role === 'ADMIN' &&
                                        <Link className='header__item-link' to='/PostItem'>Subir Producto</Link>
                                    }
                                    <Link to='/' className='header__item-link' onClick={logout}>Cerrar sesión</Link>
                                    <Link to='/buy'> <Carrito className='carrito' /> </Link>
                                    <div>{searchItemContext.itemCarrito.length}</div>
                                </ul>
                            </ul>
                        </div>

                }
            </div>
        </>
    )
}