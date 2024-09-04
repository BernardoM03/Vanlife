import React from "react"
import { NavLink, useParams, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";


export function loader({ params }) {
    console.log(params)
    return getVans(params.id);
}

export default function VanDetail() {
    //const [van, setVan] = React.useState(null)
    //const params = useParams();
    let { state } = useLocation();
    const van = useLoaderData();
    console.log(van)
    //console.log(state)

    /*React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])*/

    const search = state?.search || ""
    const type = state?.type || "all"

    return (
        <div>
            {van
                ?
                <div className="main">
                    <NavLink to={`..${search}`}
                        relative="path"
                        className="link--unselected"
                    >&#8592; Back to {type} Vans</NavLink>
                    <main className="main vandetail">
                        <img className="vandetail--img" src={van.imageUrl} />
                        <div className="vandetail--info">
                            <h1 className="vandetail--name">{van.name}</h1>
                            <p className={`van--type ${van.type} selected`}>{van.type}</p>
                            <p className="vandetail--price">${van.price}<span className="price--day">/day</span></p>
                            <p className="vandetail--desc">{van.description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>
                    </main >
                </div>
                : <main className="main vandetail"><h1>Loading...</h1></main >
            }
        </div>
    );
}