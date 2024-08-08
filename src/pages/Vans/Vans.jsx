import React from "react";
import { Link } from 'react-router-dom'

export default function Vans() {
    const [vansData, setVansData] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])


    const vanElements = vansData.map((van) => {
        return (
            <div key={van.id} className="van">
                <Link to={`/vans/${van.id}`} aria-label={`View Details for ${van.name}`}><img src={van.imageUrl} /></Link>
                <div className="van--info">
                    <p className="van--infotext"><Link to={`/vans/${van.id}`}>{van.name}</Link><span className="van--price">${van.price}<span className="price--day">/day</span></span></p>
                    <p className={`van--type ${van.type} selected`}>{van.type}</p>
                </div>
            </div>
    )});

    return (
        <main className="main vans">
            <div className="vans--header">
                <h1>Explore our van options</h1>
                <div className="vans--tags">
                    <button className="vans--tag simple">Simple</button>
                    <button className="vans--tag luxury">Luxury</button>
                    <button className="vans--tag rugged">Rugged</button>
                    <button className="vans--tagclear">Clear Filters</button>
                </div>
            </div>
            {
                vansData
                    ? <div className="vans--browse">
                        {vanElements}
                    </div>
                    : <h1 className="loading">Loading Vans...</h1>
            }
        </main>
    );
}