import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//El nav link puede establecer  una clase si el link coincide econ el path, hay una nueva sintaxis

export const NavBar = () => {
    return (
        <nav className="nav mb-3">
            <NavLink  className="nav-link" to="/">Home</NavLink>
            <NavLink  className="nav-link" to="/about">About</NavLink>
            <NavLink  className="nav-link" to="/login">Login</NavLink>
        </nav>
    )
}
