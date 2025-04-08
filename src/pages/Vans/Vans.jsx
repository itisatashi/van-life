import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]); // State to store the vans data
  const [searchParams, setSearchParams] = useSearchParams(); // State to store the search parameters

  const typeByFilter = searchParams.get("type"); // Get the type filter from the search parameters

  React.useEffect(() => {
    // Fetch the vans data from the API and update the state
    fetch(`/api/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVans = typeByFilter
    ? vans.filter((van) => van.type === typeByFilter) // Filter the vans data by type
    : vans; // If no type filter, display all vans

  const vansElements = displayVans.map(
    (
      van // Create a list of van elements
    ) => (
      <div key={van.id} className="vans-item">
        <Link
          to={van.id}
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
    )
  );

  function handleFilterChange(key, value) {
    // Update the search parameters based on the filter selection
    setSearchParams((prevSearchParams) => {
      if (key === null) prevSearchParams.delete(key);
      else prevSearchParams.set(key, value);

      return prevSearchParams;
    });
  }

  return vans ? ( // If vans data is available, render the list
    <section className="vans-container">
      <h1 className="vans-title">Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className="filter-button"
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className="filter-button"
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className="filter-button"
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        {typeByFilter && (
          <button className="clear-filter" onClick={() => setSearchParams({})}>
            Clear filters
          </button>
        )}
      </div>
      <div className="vans-list">{vansElements}</div>
    </section>
  ) : (
    <p>Loading</p> // If no vans data is available, display a loading message
  );
}
