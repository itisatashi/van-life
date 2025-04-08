import React from "react";
import { useParams, Outlet, Link, NavLink } from "react-router-dom";

export default function HostVansDetail() {
  // Get the id of the van from the URL parameters
  const params = useParams();
  // Initialize the state of the current van
  const [currentVan, setCurrentVan] = React.useState(null);

  // Fetch the van data from the API when the component mounts
  // and when the params.id changes
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [params.id]);

  return (
    <section className="host-van-detail-container">
      {/* Link back to the vans list */}
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {/* If the van data is available, render the van detail */}
      {currentVan ? (
        <>
          {/* Render the van image and details */}
          <div className="host-van-detail-card">
            <div className="host-van-detail-image-wrapper">
              <img
                src={currentVan.imageUrl}
                alt={`An image of ${currentVan.name}`}
              />
              <div className="host-van-detail-card-info">
                {/* Render the van type */}
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                {/* Render the van name */}
                <h3>{currentVan.name}</h3>
                {/* Render the van price */}
                <p>
                  ${currentVan.price}/<span>day</span>
                </p>
              </div>
            </div>

            {/* Render the navigation links */}
            <nav className="host-van-nav">
              <ul className="host-van-nav-list">
                <li className="host-van-nav-item">
                  {/* Link to the van details page */}
                  <NavLink
                    to="."
                    end
                    className={({ isActive }) =>
                      isActive ? "active-link" : null
                    }
                  >
                    Details
                  </NavLink>
                </li>
                <li className="host-van-nav-item">
                  {/* Link to the van pricing page */}
                  <NavLink
                    to="pricing"
                    className={({ isActive }) =>
                      isActive ? "active-link" : null
                    }
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="host-van-nav-item">
                  {/* Link to the van photos page */}
                  <NavLink
                    to="photos"
                    className={({ isActive }) =>
                      isActive ? "active-link" : null
                    }
                  >
                    Photos
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Render the outlet for the van details, pricing and photos */}
            <Outlet context={currentVan} />
          </div>
        </>
      ) : (
        // If the van data is not available, render a loading message
        <h1>Loading...</h1>
      )}
    </section>
  );
}
