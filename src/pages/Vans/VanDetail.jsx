import React from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <Link to=".." relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
          </Link>
          <img src={van.imageUrl} alt={`An image of ${van.name}.`} />
          <i className={`van-type van-type-${van.type}`}>{van.type}</i>
          <h3 className="van-name">{van.name}</h3>
          <p className="van-price">
            ${van.price} <span>/day</span>
          </p>
          <p className="van-description">{van.description}</p>
          <Link className="link-button">rent this van</Link>
        </div>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </section>
  );
}
