import { RestaurantCard } from "./RestaurantCard";
import { resDataOBJ } from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  const [dummyVar, setDummyVar] = useState(resDataOBJ);
  return (
    <>
      {console.log(dummyVar)}
      <div className="top-Rated">
        <button
          className="top-rated-button"
          onClick={() => {
            const filteredList=dummyVar.filter((x) => x.card.card.info.avgRating > 4.0);
              setDummyVar(filteredList);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {dummyVar.map((uniq) => {
          return (
            <RestaurantCard resDataKey={uniq} key={uniq?.card?.card?.info.id} />
          );
        })}
      </div>
    </>
  );
};
