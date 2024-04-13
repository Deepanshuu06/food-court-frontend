import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartMenu = ({ card }) => {
  const dispatch = useDispatch();


  const handleRemoveItem = () => {
    dispatch(removeItem()); // Dispatching an action with index inside an object
  };


  return (
    <div className="restaurants-food-menu-list-cards">
      <div className="restaurants-food-menu-list-card-left">
        <h3>{card?.info?.name}</h3>
        <h5>
          <span>&#8377;</span>
          {` ${
            (card?.info?.price
              ? card?.info?.price
              : card?.info?.variantsV2?.variantGroups[0]?.variations[0]
                  ?.price) / 100
          }`}
        </h5>
        <p>{card?.info?.description}</p>
        <p>{card?.info?.ratings?.aggregatedRating?.rating}</p>
      </div>
      <div className="restaurants-food-menu-list-card-right">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${card?.info?.imageId}`}
          alt={card?.info?.name}
        />
        <button onClick={() => 
         handleRemoveItem()
        }>remove</button>
      </div>
    </div>
  );
};

export default CartMenu;
