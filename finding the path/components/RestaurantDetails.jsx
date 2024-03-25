import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestaurantListShimmer from "./RestaurantListShimmer";
import RestaurantFoodMenuCard from "./RestaurantFoodMenuCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantdata, setRestaurantData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await response.json();
      setRestaurantData(json);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  }

  // console.log(restaurantdata);

  const discountAvailable =
    restaurantdata?.data?.cards[0]?.card?.card?.info?.aggregatedDiscountInfo
      ?.descriptionList || [];

  const recommendedMenu =
    restaurantdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards || [];

  return (
    <>
      {loading ? (
        <RestaurantListShimmer />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="restaurant-info-page">
          <div className="restaurant-info">
            <div className="left-restaurant-info">
              <h4 className="restaurant-name">
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.name || ""}
              </h4>
              <p className="restaurant-cuisines">
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.cuisines?.join(
                  ", "
                ) || ""}
              </p>
              <p className="restaurant-area-name">
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.areaName ||
                  ""}
              </p>
              <p className="restaurant-city">
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.city || ""}
              </p>
            </div>
            <div className="right-restaurant-info">
              <h4 className="avg-rating">
              
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.avgRating ||
                  ""}
              </h4>
              <h6 className="total-ratings">
                {restaurantdata?.data?.cards[0]?.card?.card?.info
                  ?.totalRatingsString || ""}
              </h6>
            </div>
          </div>
          <div className="coupons-section">
            <div className="delivery-time">
              <h3>
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.name
                  ?.costForTwoMessage || ""}
              </h3>
            </div>

            <div className="coupons">
              {discountAvailable.map((coupon, index) => (
                <div className="coupon" key={index}>
                  <h4>{coupon?.meta}</h4>
                </div>
              ))}
            </div>

            <div className="veg-or-nonveg">
             
                {restaurantdata?.data?.cards[0]?.card?.card?.info?.veg
                  ?   <h3 className="veg-text">Pure Veg</h3>
                  : <h3 className="non-veg-text">Veg & Non-Veg</h3>}
             
            </div>
          </div>
          <div className="restaurants-food-menu-list-card-heading">
            <h3>
              {restaurantdata?.data?.cards[2]?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards[1]?.card?.card?.title || ""}
            </h3>

            {recommendedMenu.map((food, index) => (
              <RestaurantFoodMenuCard key={index} food={food} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
