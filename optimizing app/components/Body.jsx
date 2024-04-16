import React, { useEffect, useState, useContext } from "react";
import RestorantCard from "./RestorantCard.jsx"; // Importing RestorantCard component
import NotFound from "./LoaderUI.jsx"; // Importing NotFound component
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import OfflinePage from "./OfflinePage.jsx";
import useOnline from "../utils/useOnline.jsx";
import { UserContext } from "../utils/UserContext.jsx";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]); // State to hold the list of restaurants
  const [searchText, setSearchText] = useState(""); // State to hold the search text
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // State to hold the filtered restaurant list
  const [loading, setLoading] = useState(true); // State to indicate loading state
  const [error, setError] = useState(null); // State to hold error information
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchRestaurant(); // Fetching restaurant data when component mounts
  }, []);

  async function fetchRestaurant() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7513527&lng=75.90059339999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      ); // Fetching restaurant data from the API
      const json = await response.json(); // Parsing the response as JSON
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants; // Extracting restaurant information from the JSON response
      setRestaurantList(restaurants); // Setting the list of restaurants
      setFilteredRestaurant(restaurants); // Setting the filtered restaurant list initially to all restaurants
      setLoading(false); // Setting loading state to false
    } catch (error) {
      setError(error); // Setting error state if there's an error during fetching
      setLoading(false); // Setting loading state to false
    }
  }

  const handleSearchInput = (e) => {
    setSearchText(e.target.value); // Handling input change for search text
  };

  const handleSearch = () => {
    const filteredRestaurant = restaurantList.filter((restaurant) =>
      restaurant?.info?.name
        ?.toLowerCase()
        ?.trim()
        ?.replace(/\s+/g, "")
        ?.includes(searchText?.trim()?.toLowerCase()?.replace(/\s+/g, ""))
    ); // Filtering restaurants based on search text

    setFilteredRestaurant(filteredRestaurant); // Setting the filtered restaurant list
  };

  const isOnline = useOnline();

  if (!restaurantList) return <NotFound />; // Displaying NotFound component if restaurant list is empty

  return isOnline ? (
    <>
      <div className="search-container my-10 place-items-center justify-center flex text-center">
        <input
          className="search-bar place-items-center h-10 p-6 border-2 border-zinc-400 rounded-lg "
          type="text"
          placeholder="Search what you want to eat..."
          value={searchText}
          onChange={handleSearchInput} // Handling input change for search
        />
        <button
          onClick={handleSearch}
          className="search-btn w-2xl h-10 bg-slate-400 p-6 ml-4 items-center flex rounded-lg text-white"
        >
          Search
        </button>
        <input
          type="text"
          placeholder="set your name"
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: e.target.value,
            })
          }
        />
        <button>Change</button>
      </div>

      {loading ? (
        <NotFound /> // Displaying NotFound component if loading
      ) : error ? (
        <p>Something went wrong. Please try again later.</p> // Displaying error message if there's an error
      ) : (
        <div className="restaurant-list flex flex-wrap">
          {filteredRestaurant.length === 0 ? (
            <h1 className="result-not-found">No results found.</h1> // Displaying message if no results found
          ) : (
            filteredRestaurant.map((restaurant) => (
              <Link
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <RestorantCard data={restaurant} />
              </Link>
            ))
          )}
        </div>
      )}
    </>
  ) : (
    <OfflinePage />
  );
}

export default Body;
