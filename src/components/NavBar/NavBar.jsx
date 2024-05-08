import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img className='icon' src="/img/icon.png" alt="Snow Home Icon" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/category/Componentes" className="nav-link">Componentes</Link>

                        <Link to="/category/PcsA" className="nav-link">Pcs Armadas</Link>

                        <Link to="/category/Monitores" className="nav-link">Monitores</Link>

                        <Link to="/category/Teclados" className="nav-link">Teclados</Link>

                        <Link to="/category/Mouses" className="nav-link">Mouses</Link>

                        <Link to="/category/Luces" className="nav-link">Luces</Link>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar