import { CDN_Logo } from "../utils/constant";

import { useEffect, useState } from "react";

export const Header = () => {

  console.log("Renders");


  const [log, setLog] = useState(true);

   useEffect(() => {
    console.log("Re-rendered")
  },[])

  const logFunction = () => {
    return log ? "login" : "logout";
  };

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
              setLog(!log);
            }}
          >
            {logFunction()}
          </button>
        </ul>
      </div>
    </div>
  );
};
