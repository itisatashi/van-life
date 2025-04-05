import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const currentVanPrice = useOutletContext();
  return (
    <div className="host-van-pricing-container">
      <p>
        ${currentVanPrice.price}
        <span>/day</span>
      </p>
    </div>
  );
}
