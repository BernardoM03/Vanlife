import React from "react"
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <main className="main about">
            <img className="about--img" src="../public/images/vanlifeabout.png" />
            <div className="about--info">
                <h1 className="about--header">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <h3 className="about--subheader">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</h3>
                <h3 className="about--subheader">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</h3>
                <div className="about--explore">
                    <h2 className="explore--header">Your destination is waiting.</h2>
                    <h2 className="explore--header">Your van is ready.</h2>
                    <Link to="/vans" className="explore--btn">Explore our vans</Link>
                </div>
            </div>
        </main>
    );
}