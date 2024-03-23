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
        <h3>{data?.info?.name}</h3>
        <h5>{data?.info?.cuisines.join(", ")}</h5>
        <p>{data?.info?.avgRating} star rating </p>
      </div>
    </>
  );
}

export default RestorantCard;
