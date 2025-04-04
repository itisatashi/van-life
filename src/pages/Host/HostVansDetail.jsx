import React from "react";
import { useParams } from "react-router-dom";

export default function HostVansDetail() {
  const params = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [params.id]);

  console.log(currentVan);
  return (
    <>
      {currentVan ? (
        <section className="host-van-detail-container">
          <div className="host-van-detail-card">
            <div className="host-van-detail-image-wrapper">
              <img
                src={currentVan.imageUrl}
                alt={`An image of ${currentVan.name}`}
              />
              <div className="host-van-detail-card-info">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <p>
                  ${currentVan.price}/<span>day</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
