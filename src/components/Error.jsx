import React from "react"
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    return (
        <main className="notfound">
            <h1>Sorry, the page you were looking for has encountered an error...</h1>
            <h1>Status {error.status}: {error.statusText}</h1>
            <Link to=".." className="home--btn">Return to Home</Link>
        </main>
    );
}