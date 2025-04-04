import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElements = vans.map((van) => (
    <Link
      key={van.id}
      className="host-van-link-wrapper"
      to={`/host/vans/${van.id}`}
    >
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
          {vans.length > 0 ? vansElements : <h2>Loading...</h2>}
        </div>
      </section>
    </>
  );
}
