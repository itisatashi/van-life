import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  // useOutletContext() is a hook that returns the context (data) passed
  // down from a parent route element. In this case, we're getting the
  // current van data from the parent route element.
  const currentVanData = useOutletContext();

  return (
    <>
      <div className="host-van-info-container">
        <p>
          {/* Display the van name */}
          <strong>Name:</strong> {currentVanData.name}
        </p>
        <p>
          {/* Display the van category */}
          <strong>Category:</strong> {currentVanData.type}
        </p>
        <p>
          {/* Display the van description */}
          <strong>Description:</strong> {currentVanData.description}
        </p>
        <p>
          {/* Display the van visibility */}
          <strong>Visibility:</strong>{" "}
          {/* If the van is public, display "Public", otherwise display "Private" */}
          {currentVanData.visiblity ? "Public" : "Private"}
        </p>
      </div>
    </>
  );
}
