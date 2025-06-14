import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";
import { Body } from "./components/Body";

import About  from "./components/About"
import {Error} from "./components/Error"
import {Contacts} from "./components/Contacts"

import RestaurantMenu from "./components/RestaurantsMenu"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"




const Grocery=lazy(()=>{
  return(
  import("./components/Grocery")
  )
});


const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[{

      path:"/about",
      element:<About />

    },
    {
      path:"/grocery",
      element:  <Suspense feedback={<h1>Loading....</h1>}>  <Grocery />  </Suspense> 
    },
    {
      path:"/",
      element:<Body />

    },
    {
      path:"/contacts",
      element:<Contacts />
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu />

    }
  ]
  
  },

  
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
