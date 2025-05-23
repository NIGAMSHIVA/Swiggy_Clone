import {CDN_Logo} from "../utils/constant"
export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo_Image"
          src={CDN_Logo}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


