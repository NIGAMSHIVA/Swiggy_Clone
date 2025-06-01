import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo,setResInfo]=useState(null);

    console.log(resInfo);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menudata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.397862940017443&lng=80.32161757349968&restaurantId=1027537&catalog_qa=undefined&query=Noodles&submitAction=ENTER"
    );

    const json= await menudata.json();  
    setResInfo(json.data);

  };







  if (resInfo===null) 
  return  <Shimmer /> ;

  const {name,cuisines,costForTwoMessage}=(resInfo?.cards[2]?.card?.card?.info)


return (


    <div>
      <h1>{name}</h1>
    <p>{cuisines.join(",")}</p>
    <h3>{costForTwoMessage}</h3>
    </div>

)
  
};

export default RestaurantMenu;
