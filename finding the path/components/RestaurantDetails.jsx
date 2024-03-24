import { useParams } from "react-router";
import React from "react";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
//   const { id } = useParams();

  const [restaurantdata, setRestaurantData] = useState({});

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=84070&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    setRestaurantData(json);
  }

  const { name , city } = restaurantdata?.data?.cards[0]?.card?.card?.info

// console.log(restaurantdata.data.cards[0].card.card.info.name);
console.log(restaurantdata?.data?.cards[0]?.card?.card?.info?.name);

  return (
    <>
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <h1>{city}</h1>
            
        </div>
    </>
  );
};

export default RestaurantMenu;
