import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const [currentVan, setCurrentVan] = useOutletContext();
    return (
        <p className="hostvan--price">${currentVan.price}.00<span className="price--day">/day</span></p>
    );
}