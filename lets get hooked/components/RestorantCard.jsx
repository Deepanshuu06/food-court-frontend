import React from "react";

function RestorantCard({ data }) {
  // Check if cloudinaryImageId exists, if not, set a placeholder image
  const imageUrl = data.info?.cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`
    : "https://via.placeholder.com/300"; // Placeholder image URL

  return (
    <>
      <div className="card">
        {/* Render the image with the imageUrl */}
        <img src={imageUrl} alt="Restaurant" />
        <h2>{data.info?.name}</h2>
        <h3>{data.info?.cuisines.join(", ")}</h3>
        <h4>{data.info?.avgRating} star rating </h4>
      </div>
    </>
  );
}

export default RestorantCard;
