import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import CartMenu from "./CartMenu";
import { clearCart } from "../utils/cartSlice";

const CheckOutPage = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="checkout-page">
      <h1>Checkout Page</h1>
      <h4>Total item - {cartItem.length}</h4>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      {cartItem.map((item, index) => (
        <CartMenu key={index} card={item} />
      ))}
      </div>
    </>
  );
};

export default CheckOutPage;
