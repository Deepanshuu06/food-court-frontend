import React from "react";
const RestaurantListShimmer = () => {
    return(
        <>
        {Array(2).fill("").map((_, index) => (
            <div className="restaurant-home-card" key={index}>
        
                    <div className="restaurant-details-shimmer">
                      
                    </div>
              
            </div>
        ))}
        </>
    )
}
export default RestaurantListShimmer;