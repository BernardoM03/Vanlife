import React from "react"
import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom"
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
    await requireAuth(request)
    return getHostVans(params.id)
}

export default function HostVanDetails() {
    const currentVan = useLoaderData();
    console.log(currentVan)
    //const [currentVan, setCurrentVan] = React.useState(null)
    /*React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans[0]))
    }, [])
    */



    return (
        <main>
            <NavLink to=".." relative="path" className="link--unselected">&#8592; Back to all Vans</NavLink>
            <main className="main vandetail">
                <img className="vandetail--img" src={currentVan.imageUrl} />
                <div>
                    <div className="hostvandetail--info">
                        <h1 className="hostvandetail--name">{currentVan.name}</h1>
                        <p className={`van--type ${currentVan.type} selected`}>{currentVan.type}</p>
                        <p className="vandetail--price">${currentVan.price}<span className="price--day">/day</span></p>
                    </div>
                    <div className="hostvan--navbar">
                        <NavLink to="." end className={({ isActive }) => isActive ? "link--selected" : "link--unselected"}>Details</NavLink>
                        <NavLink to="pricing" className={({ isActive }) => isActive ? "link--selected" : "link--unselected"}>Pricing</NavLink>
                        <NavLink to="photos" className={({ isActive }) => isActive ? "link--selected" : "link--unselected"}>Photos</NavLink>
                    </div>
                    <div className="hostvandetail--child">
                        <Outlet context={{ currentVan }} />
                    </div>
                </div>
            </main >
        </main>
    );
}