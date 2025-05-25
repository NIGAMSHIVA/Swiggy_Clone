import { CDN_Logo } from "../utils/constant";

import { useState } from "react";

export const Header = () => {
  const [log, setLog] = useState(true);

  const Fn = () => {
    setLog(!log);
  };

  const logFunction = () => {
    return log ? "login" : (
      
      "logout"
     
    )
  }

  return (
    <div className="header">
      <div className="logo">
        <img className="logo_Image" src={CDN_Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="logout-button"
            onClick={() => {
              Fn();
            }}
          >{logFunction()}</button>
        </ul>
        
      </div>
    </div>
  );
};
