import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestaurantListShimmer from "./RestaurantListShimmer"; // Importing   RestaurantListShimmer component
import RestaurantFoodMenuCard from "./RestaurantFoodMenuCard"; // Importing RestaurantFoodMenuCard component

const RestaurantMenu = () => {
  const { id } = useParams(); // Extracting id parameter from URL
  const [restaurantdata, setRestaurantData] = useState({}); // State to hold restaurant data
  const [loading, setLoading] = useState(true); // State to indicate loading state
  const [error, setError] = useState(null); // State to hold error information

  useEffect(() => {
    fetchRestaurantData(); // Fetching restaurant data when component mounts
  }, []); 

  async function fetchRestaurantData() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      ); // Fetching restaurant data from the API
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json(); // Parsing the response as JSON
      setRestaurantData(json); // Setting the fetched restaurant data
      setLoading(false); // Setting loading state to false
    } catch (error) {
      setError("Error fetching data. Please try again later."); // Setting error state if there's an error during fetching
      setLoading(false); // Setting loading state to false
    }
  }

  // Extracting discount information
  const discountAvailable =
    restaurantdata?.data?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo
      ?.descriptionList || [];

  // Extracting recommended menu items
  const recommendedMenu =
    restaurantdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards || [];

  // Extracting top picks menu items
  const topPicks =
    restaurantdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards || [];

  return (
    <>
      {loading ? (
        <RestaurantListShimmer /> // Displaying RestaurantListShimmer component if loading
      ) : error ? (
        <p>{error}</p> // Displaying error message if there's an error
      ) : (
        <div className="restaurant-info-page">
          <div className="restaurant-info">
            {/* Displaying basic restaurant information */}
            <div className="left-restaurant-info">
              <h4 className="restaurant-name">
                {restaurantdata?.data?.cards[2]?.card?.card?.info?.name || ""}
              </h4>
              <p className="restaurant-cuisines">
                {restaurantdata?.data?.cards[2]?.card?.card?.info?.cuisines?.join(
                  ", "
                ) || ""}
              </p>
              <p className="restaurant-area-name">
                {restaurantdata?.data?.cards[2]?.card?.card?.info?.areaName ||
                  ""}
              </p>
              <p className="restaurant-city">
                {restaurantdata?.data?.cards[2]?.card?.card?.info?.city || ""}
              </p>
              <div className="restaurant-isOpen">
                {restaurantdata?.data?.cards[2]?.card?.card?.info?.isOpen ? (
                  <h4 className="Restaurant-open-text">OPEN</h4>
                ) : (
                  <h4 className="Restaurant-closed-text">
                    CLOSED
                  </h4>
                )}
              </div>
            </div>
            {/* Displaying restaurant rating */}
            <div className="right-restaurant-info">
              <h4 className="avg-rating">
                <span className="material-symbols-outlined">star_rate_half</span>
                {restaurantdata?.data?.cards[2]?.card?.card?.info?.avgRating ||
                  ""}
              </h4>
              <h6 className="total-ratings">
                {restaurantdata?.data?.cards[2]?.card?.card?.info
                  ?.totalRatingsString || ""}
              </h6>
            </div>
          </div>
          {/* Displaying delivery info and coupons */}
          <div className="coupons-section">
            <div className="delivery-time">
              <h3>
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.name
                  ?.costForTwoMessage || ""}
              </h3>
            </div>
            {/* Displaying available discounts */}
            <div className="coupons">
              {discountAvailable.map((coupon, index) => (
                <div className="coupon" key={index}>
                  <h4>{coupon?.meta}</h4>
                </div>
              ))}
            </div>
            {/* Displaying whether the restaurant is pure veg or not */}
            <div className="veg-or-nonveg">
              {restaurantdata?.data?.cards[2]?.card?.card?.info?.veg ? (
                <h3 className="veg-text both-text ">
                  <span className="material-symbols-outlined">psychiatry</span>Pure
                  Veg
                </h3>
              ) : (
                <h3 className="non-veg-text both-text">Veg & Non-Veg</h3>
              )}
            </div>
          </div>
          {/* Displaying recommended and top picks menu items */}
          <div>
            <div className="recomended-items">
              <h3 className="restaurants-food-menu-list-card-heading">
                {restaurantdata?.data?.cards[4]?.groupedCard?.cardGroupMap
                  ?.REGULAR?.cards[1]?.card?.card?.title || ""}
              </h3>
              {recommendedMenu.map((food) => (
                <RestaurantFoodMenuCard
                  key={food?.card?.info?.id}
                  food={food} // Passing menu item data as prop to RestaurantFoodMenuCard component
                />
              ))}
            </div>
            <div className="top-picks-items">
              <h3 className="restaurants-food-menu-list-card-heading">
                {restaurantdata?.data?.cards[4]?.groupedCard?.cardGroupMap
                  ?.REGULAR?.cards[2]?.card?.card?.title || ""}
              </h3>
              {topPicks.map((food) => (
                <RestaurantFoodMenuCard
                  key={food?.card?.info?.id}
                  food={food} // Passing menu item data as prop to RestaurantFoodMenuCard component
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
