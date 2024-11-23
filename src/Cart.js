import { useSelector } from "react-redux";
import RestroItems from "./RestroItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems && cartItems.length !== 0 ? (
    cartItems.map((cartItem) => (
      <div className="flex flex-col items-center">
        <RestroItems itemsInfo={cartItem}></RestroItems>
      </div>
    ))
  ) : (
    <h1>Cart is empty</h1>
  );
};
export default Cart;
