import React from "react"
import { Outlet, NavLink } from "react-router-dom";


export default function HostLayout() {
    return (
        <main>
            <nav className="host--links">
                <NavLink to="." end className={({isActive}) => isActive ? "link--selected" : "link--unselected"}>#Dashboard</NavLink>
                <NavLink to="income" className={({isActive}) => isActive ? "link--selected" : "link--unselected"}>#Income</NavLink>
                <NavLink to="vans" className={({isActive}) => isActive ? "link--selected" : "link--unselected"}>#Vans</NavLink>
                <NavLink to="reviews" className={({isActive}) => isActive ? "link--selected" : "link--unselected"}>#Reviews</NavLink>
            </nav>
            <Outlet />
        </main>
    );
}