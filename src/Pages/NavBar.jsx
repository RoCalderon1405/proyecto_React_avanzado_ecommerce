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
            <div className="navBar">
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <div className="navbar-brand">E-commerce</div>
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