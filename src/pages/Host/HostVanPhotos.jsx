import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const currentVanPhotos = useOutletContext();
  return (
    <div className="host-van-photos-container">
      <img
        src={currentVanPhotos.imageUrl}
        alt={`An image of ${currentVanPhotos.name}`}
      />
    </div>
  );
}
