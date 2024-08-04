import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/" className="header">#VANLIFE</Link>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </nav>
    );
}