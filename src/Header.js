import { LOGO_URL } from "../utils/constants";
const Header = () => (
  <div className="header">
    <img className="logo" src={LOGO_URL}></img>
    <div className="nav-bar">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
export default Header;
