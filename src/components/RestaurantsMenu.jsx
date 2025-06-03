import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

import {Link} from "react-router-dom"

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  console.log(resMenu);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menudata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.397862940017443&lng=80.32161757349968&restaurantId="+resId
    );

    console.log(menudata);

    const json = await menudata.json();
    setResMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setResInfo(json.data);
  };

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
