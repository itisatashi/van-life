import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  // State to store the vans data
  const [vans, setVans] = React.useState([]);

  // Fetch the vans data from the API when the component mounts
  React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  // Function to map the vans data and render a list of links to the van details pages
  const vansElements = vans.map((van) => (
    <Link key={van.id} className="host-van-link-wrapper" to={van.id}>
      <div className="host-van-item">
        <img src={van.imageUrl} alt={`An image of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}/<span>day</span>
          </p>
        </div>
      </div>
    </Link>
  ));
  return (
    <>
      <section className="host-vans-container">
        <h1>Your listed vans</h1>
        <div className="host-vans-list">
          {/* If the vans data is available, render the list */}
          {vans.length > 0 ? vansElements : <h2>Loading...</h2>}
        </div>
      </section>
    </>
  );
}
