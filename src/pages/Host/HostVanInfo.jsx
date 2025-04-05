import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const currentVanData = useOutletContext();
  console.log(currentVanData);
  return (
    <>
      <div className="host-van-info-container">
        <p>
          <strong>Name:</strong> {currentVanData.name}
        </p>
        <p>
          <strong>Category:</strong> {currentVanData.type}
        </p>
        <p>
          <strong>Description:</strong> {currentVanData.description}
        </p>
        <p>
          <strong>Visibility:</strong>{" "}
          {currentVanData.visiblity ? "Public" : "Private"}
        </p>
      </div>
    </>
  );
}
