import React, { useEffect, useState } from "react";
import RestorantCard from "./RestorantCard";

function Body() {
  const [restaurantlist, setRestaurantlist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

async function fetchRestaurant() {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setRestaurantlist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
}
console.log(restaurantlist);

  

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filteredRestaurant = restaurantlist.filter((restaurant) =>
      restaurant?.info?.name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(searchText.trim().toLowerCase().replace(/\s+/g, ""))
    );

    setFilteredRestaurant(filteredRestaurant);
  };

  // const filteredRestaurant = searchText ?
  // restaurantlist.filter((restaurant)=>(
  //   restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  // ))
  // :restaurantlist;

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
          search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => (
          <RestorantCard data={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
}

export default Body;
