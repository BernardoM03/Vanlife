import React from "react";
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/" className="header">#VANLIFE</Link>
            <div className="links">
                <NavLink to="/about" className={({isActive}) => isActive ? "link--selected" : "link--unselected" }>About</NavLink>
                <NavLink to="/vans" className={({isActive}) => isActive ? "link--selected" : "link--unselected" }>Vans</NavLink>
                <NavLink to="/host" className={({isActive}) => isActive ? "link--selected" : "link--unselected" }>Host</NavLink>
            </div>
        </nav>
    );
}