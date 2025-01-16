import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/cartSlice";
import RestroItems from "./RestroItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearClick = () => {
    dispatch(clearItem());
  };

  return cartItems && cartItems.length !== 0 ? (
    <div>
      <div className="flex flex-col items-center">
        <button
          className="w-24 m-6 bg-orange-500 text-white items-center rounded-md"
          onClick={() => {
            handleClearClick();
          }}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.map((cartItem) => (
        <div className="flex flex-col items-center">
          <RestroItems itemsInfo={cartItem}></RestroItems>
        </div>
      ))}
    </div>
  ) : (
    <h1>Cart is empty</h1>
  );
};
export default Cart;
