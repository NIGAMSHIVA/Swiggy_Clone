import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  
  const { resId } = useParams();

  const {resInfo,resMenu}=useRestaurantMenu(resId);

  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  if (resMenu === null) return <Shimmer />;

  // const { name, category, description } = resMenu?.card.info;

  return (
    <div className="Menu-Res">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <h3>{costForTwoMessage}</h3>

      <h2>Menu</h2>

      {resMenu.map((x) => {
        return (
          <p key={x?.card?.info?.id}>
            {x?.card?.info?.name} {"Rs-"} {x?.card?.info?.price / 100}
          </p>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
