import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const {currentVan} = useOutletContext();
    return (
        <div>
            <p className="hostvan--text"><span className="bolded">Name: </span>{currentVan.name}</p>
            <p className="hostvan--text"><span className="bolded">Category: </span>{currentVan.type}</p>
            <p className="hostvan--text"><span className="bolded">Description: </span>{currentVan.description}</p>
            <p className="hostvan--text"><span className="bolded">Visibility: </span>Public</p>
        </div>
    );
}