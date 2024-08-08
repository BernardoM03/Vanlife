import React from "react";
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className='main home'>
            <div className='home--container'>
                <h1 className='home--header'>You got the travel plans, we got the travel vans.</h1>
                <h2 className='home--subheader'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h2>
                <Link to="/vans" className="home--btn">#Find your van</Link>
            </div>
        </main>
    )
}