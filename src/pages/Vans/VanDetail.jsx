import React from "react"
import { Link, useParams } from "react-router-dom";

export default function VanDetail() {
    const [van, setVan] = React.useState(null)
    const params = useParams();

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div>
            {van
            ? <main className="main vandetail">
                <img className="vandetail--img" src={van.imageUrl} />
                <div className="vandetail--info">
                    <h1 className="vandetail--name">{van.name}</h1>
                    <p className={`van--type ${van.type} selected`}>{van.type}</p>
                    <p className="vandetail--price">${van.price}<span className="price--day">/day</span></p>
                    <p className="vandetail--desc">{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            </main >
            : <main className="main vandetail"><h1>Loading...</h1></main >
            }
        </div>
    );
}