import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch(`/api/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElements = vans.map((van) => (
    <div key={van.id} className="vans-item">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name},priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`An image of ${van.name}`} />
        <div className="item-content">
          <p className="van-name">{van.name}</p>
          <p className="van-description">
            ${van.price} <span>/day</span>{" "}
          </p>
        </div>
        <i className={`van-type van-type-${van.type}`}>{van.type}</i>
      </Link>
    </div>
  ));

  return vans ? (
    <section className="vans-container">
      <h1 className="vans-title">Explore our van options</h1>
      <div className="vans-list">{vansElements}</div>
    </section>
  ) : (
    <p>Loading</p>
  );
}
