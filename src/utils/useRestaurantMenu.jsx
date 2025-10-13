import { useEffect,useState } from "react";
import RestaurantMenu from "../components/RestaurantsMenu";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    const [resMenu,setResMenu]=useState(null);

    useEffect(()=>{

        fetchMenu()

    },[])


   const fetchMenu = async () => {
  const response = await fetch("/mockData/restaurantMenus.json");
  const allMenus = await response.json();
  const json = allMenus[resId];

  setResMenu(
    json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  );
  setResInfo(json.data);
};


    return {resInfo,resMenu};
    
}
export default useRestaurantMenu