// import { CDN_Logo } from "../utils/constant";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export const Header = () => {
//   const [log, setLog] = useState(true);

//   const logFunction = () => (log ? "Login" : "Logout");

//   const onlineStatus = useOnlineStatus();

//   return (
//     <header className="bg-pink-100 shadow-md">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <img className="w-16 h-auto" src={CDN_Logo} alt="Logo" />
//           <span className="text-xl font-bold text-pink-800">Zwiggy Go</span>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex items-center space-x-6">
//           <span className="text-sm font-medium">
//             {onlineStatus ? "🟢 Online" : "🔴 Offline"}
//           </span>

//           <Link
//             to="/"
//             className="text-gray-700 hover:text-pink-700 font-medium transition"
//           >
//             Home
//           </Link>

//           <Link
//             to="/grocery"
//             className="text-gray-700 hover:text-pink-700 font-medium transition"
//           >
//             Grocery
//           </Link>

//           <Link
//             to="/about"
//             className="text-gray-700 hover:text-pink-700 font-medium transition"
//           >
//             About
//           </Link>

//           <Link
//             to="/contacts"
//             className="text-gray-700 hover:text-pink-700 font-medium transition"
//           >
//             Contact Us
//           </Link>

//           <span className="text-gray-700 font-medium">🛒 Cart</span>

//           {/* Login / Logout Button */}
//           <button
//             onClick={() => setLog(!log)}
//             className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 transition"
//           >
//             {logFunction()}
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };


import { CDN_Logo } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import About from "./About"

import { useEffect, useState } from "react";

import {Link} from "react-router-dom";

export const Header = () => {


  const [log, setLog] = useState(true);

   useEffect(() => {
  },[])

  const logFunction = () => {
    return log ? "login" : "logout";
  };

  const {onlineStatus}=useOnlineStatus();

  return (
    <div className=" flex justify-between bg-pink-100 " >
       <div className="flex items-center jusspace-x-1">
        <img className=" w-20 p-2 mx-6" src={CDN_Logo} />
        <span className="text-pink-500 font-extrabold text-xl">Sorry  Yaar😓 kuch khaalo isme se</span>
      </div>
      <div className="">
        <ul className="flex py-10 px-15 justify-between space-x-6">
          
          <li>
            {onlineStatus? "Online🟢" : "Offline🔴" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
