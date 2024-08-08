import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map((van) => {
        return (
            <div className="hostvans--van" key={van.id}>
                <Link to={`/host/vans/${van.id}`}><img className="hostvans--img" src={van.imageUrl} alt={`Photo of ${van.name}`} /></Link>
                <div className="hostvans--info">
                    <h3 className="hostvans--infotext"><Link className="hostvans--link" to={`/host/vans/${van.id}`}>{van.name}</Link><span className="van--price">${van.price}<span className="price--day">/day</span></span></h3>
                </div>
            </div>
        );
    })

    return (
        <main className="main hostvans">
            <h1 className="hostvans--header">Your listed Vans . . .</h1>
            <div className="hostvans--list">
                {
                    vans.length > 0
                        ? vanElements
                        : <h2 className="loading">Loading...</h2>
                }
            </div>
        </main>
    );
}