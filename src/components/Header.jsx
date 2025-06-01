import { CDN_Logo } from "../utils/constant";
import {About} from "./About"

import { useEffect, useState } from "react";

import {Link} from "react-router-dom";

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to ="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact us</Link>
          </li>
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
