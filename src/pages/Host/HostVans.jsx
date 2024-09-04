/*
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])*/

import React, { Suspense } from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { requireAuth } from "../../utils";

import { getHostVans } from "../../api";

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export default function HostVans() {
    const vansPromise = useLoaderData();

    function renderHostVanElements(vans) {
        const vanElements = vans.map((van) => {
            return (
                <div className="hostvans--van" key={van.id}>
                    <Link to={`${van.id}`}><img className="hostvans--img" src={van.imageUrl} alt={`Photo of ${van.name}`} /></Link>
                    <div className="hostvans--info">
                        <h3 className="hostvans--infotext"><Link className="hostvans--link" to={`${van.id}`}>{van.name}</Link><span className="van--price">${van.price}<span className="price--day">/day</span></span></h3>
                    </div>
                </div>
            );
        })
        return (
            < div className="hostvans--list" >
                {vanElements}
            </div >
        );
    }

    return (
        <main className="main hostvans">
            <h1 className="hostvans--header">Your listed Vans . . .</h1>
            <Suspense fallback={<h2>Loading vans...</h2>}>
                <Await resolve={vansPromise.vans}>
                    {renderHostVanElements}
                </Await>
            </Suspense>
        </main>
    );
}