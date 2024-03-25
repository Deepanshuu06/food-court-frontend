import React from "react";

const RestaurantFoodMenuCard = ({ food }) => {

    return (
        <div className="restaurants-food-menu-list-card">
              <div className="restaurants-food-menu-list-card-left">
                <h3>{food?.card?.info?.name}</h3>
                <h5><span>&#8377;</span>{` ${(food?.card?.info?.price ? food?.card?.info?.price : food?.card?.info?.variantsV2?.variantGroups[0]?.variations[0]?.price)/100}`}</h5>
                <p>
                    {food?.card?.info?.description}
                </p>
              </div>
              <div className="restaurants-food-menu-list-card-right">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${food?.card?.info?.imageId}`}
                  alt={food?.card?.info?.name}
                />
                <button>Add</button>
              </div>
            </div>
    );
    }

    export default RestaurantFoodMenuCard;