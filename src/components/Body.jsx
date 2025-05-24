
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"

export const Body = () => {
  const [dummyVar, setDummyVar] = useState([]);

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.397862940017443&lng=80.32161757349968&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const realData = await data.json();
    console.log("Fetched Data:", realData);

    const cardsData = realData.data.cards;

    const filterRestaurants=cardsData.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant")


    setDummyVar(filterRestaurants);
  };

  

  return dummyVar.length == 0 ? <Shimmer />: (
    <>
      <div className="top-Rated">
        <button
          className="top-rated-button"
          onClick={() => {
            const filteredList = dummyVar.filter(
              (x) => x?.card?.card?.info?.avgRating >= 4.0
            );
            setDummyVar(filteredList);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {dummyVar.map((uniq) => (
          <RestaurantCard
            resDataKey={uniq}
            key={uniq?.card?.card?.info?.id}
          />
        ))}
      </div>
    </>
  );
};
