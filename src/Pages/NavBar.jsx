import React, { useState } from 'react'


export const NavBar = ({ filter }) => {

    let initialSearch = ""

    const [search, setSearch] = useState(initialSearch)

    const searcher = (e) => {
        setSearch(e.target.value)
        filter(search)
    }

    const handleClean = () => {
        setSearch("")
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
                                value={search}
                                onChange={searcher}
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
            </div>
        </>
    )
}