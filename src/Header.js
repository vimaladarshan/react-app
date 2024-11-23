import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckInternetOnline from "../utils/useCheckInternetOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const checkOnline = useCheckInternetOnline();
  const { login } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg">
      <img className="h-28 w-40" src={LOGO_URL}></img>
      <div className="flex items-center">
        <ul className="flex space-x-8 px-4 last:pb-0">
          <li>{checkOnline ? "✅ Online" : "🔴 Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart"> Cart-{cartItems.length}</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <h2>{login}</h2>
        </ul>
      </div>
    </div>
  );
};
export default Header;
