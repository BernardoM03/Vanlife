/*
    const [vansData, setVansData] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVansData(data);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }   
        }
        loadVans()
    }, [])
    */


import React, { Suspense } from "react";
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom'
import { getVans } from "../../api";


export function loader() {
    return defer({ vans: getVans() })
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const vanPromise = useLoaderData();

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        })
    }

    function renderVanElements(vans) {
        const displayedVans = typeFilter
            ? vans.filter((van) => van.type === typeFilter)
            : vans;

        const vanElements = displayedVans.map((van) => (
            <div key={van.id} className="van">
                <Link
                    to={`${van.id}`}
                    state={{ search: `${searchParams.toString()}`, type: typeFilter }}
                >
                    <img src={van.imageUrl} alt={`${van.name}`} />
                </Link>
                <div className="van--info">
                    <p className="van--infotext">
                        <Link to={`${van.id}`}>{van.name}</Link>
                        <span className="van--price">
                            ${van.price}
                            <span className="price--day">/day</span>
                        </span>
                    </p>
                    <p className={`van--type ${van.type} selected`}>{van.type}</p>
                </div>
            </div>
        ));

        return (
            <>
                <div className="vans--tags">
                    <button
                        onClick={() => handleFilterChange("type", "simple")}
                        className={`vans--tag simple ${typeFilter === "simple" && "selected"}`}
                    >
                        #Simple
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "luxury")}
                        className={`vans--tag luxury ${typeFilter === "luxury" && "selected"}`}
                    >
                        #Luxury
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "rugged")}
                        className={`vans--tag rugged ${typeFilter === "rugged" && "selected"}`}
                    >
                        #Rugged
                    </button>
                    {typeFilter && (
                        <button
                            onClick={() => handleFilterChange("type", null)}
                            className="vans--tagclear"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
                <div className="vans--browse">{vanElements}</div>
            </>
        );
    }

    return (
        <main className="main vans">
            <div className="vans--header">
                <h1>Explore our van options</h1>
                <Suspense fallback={<h2>Loading vans...</h2>}>
                    <Await resolve={vanPromise.vans}>
                        {renderVanElements}
                    </Await>
                </Suspense>
            </div>
        </main>
    );
}