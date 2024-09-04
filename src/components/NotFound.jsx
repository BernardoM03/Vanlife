import React from "react"
import { Link } from 'react-router-dom'

export default function NotFound() {
 return (
    <main className="notfound">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to=".." className="home--btn">Return to Home</Link>
    </main>
 );
}