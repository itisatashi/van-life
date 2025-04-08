import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = React.useState(null);

  // Fetch the van data from the API when the component mounts
  // and when the params.id changes
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";

  return (
    <section className="van-detail-container">
      {/* If the van data is available, render the van detail */}
      {van ? (
        <div className="van-detail">
          {/* Link back to the vans list */}
          <Link to={`..${search}`} relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
          </Link>
          {/* Render the van image */}
          <img src={van.imageUrl} alt={`An image of ${van.name}.`} />
          {/* Render the van type */}
          <i className={`van-type van-type-${van.type}`}>{van.type}</i>
          {/* Render the van name */}
          <h3 className="van-name">{van.name}</h3>
          {/* Render the van price */}
          <p className="van-price">
            ${van.price} <span>/day</span>
          </p>
          {/* Render the van description */}
          <p className="van-description">{van.description}</p>
          {/* Link to the rent form */}
          <Link className="link-button">rent this van</Link>
        </div>
      ) : (
        // If the van data is not available, render a loading message
        <h2 className="loading">Loading...</h2>
      )}
    </section>
  );
}
