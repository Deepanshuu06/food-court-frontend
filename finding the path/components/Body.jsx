import React, { useEffect, useState } from "react";
import RestorantCard from "./RestorantCard";

import NotFound from "./LoaderUI.jsx";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  async function fetchRestaurant() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7513527&lng=75.90059339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(restaurants);
      setFilteredRestaurant(restaurants);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filteredRestaurant = restaurantList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.trim()?.replace(/\s+/g, "")
      ?.includes(searchText?.trim()?.toLowerCase()?.replace(/\s+/g, ""))
    );

    setFilteredRestaurant(filteredRestaurant);
  };
  if (!restaurantList) return <NotFound />;

  return (
    <>
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search what you want to eat..."
          value={searchText}
          onChange={handleSearchInput}
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {loading ? (
        <NotFound />
      ) : error ? (
        <p>Something went wrong. Please try again later.</p>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurant.length === 0 ? (
            <h1 className="result-not-found">No results found.</h1>
          ) : (
            filteredRestaurant.map((restaurant) => (
              <RestorantCard data={restaurant} key={restaurant.info.id} />
            ))
          )}
        </div>
      )}
    </>
  );
}

export default Body;
