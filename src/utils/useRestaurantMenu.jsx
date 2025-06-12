import { useEffect,useState } from "react";
import RestaurantMenu from "../components/RestaurantsMenu";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    const [resMenu,setResMenu]=useState(null);

    useEffect(()=>{

        fetchMenu()

    },[])


    const fetchMenu=async ()=>{

        const menuData=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.397862940017443&lng=80.32161757349968&restaurantId="+resId)

        const json=await menuData.json();

        console.log(json);

            setResMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setResInfo(json.data);

    }

    return {resInfo,resMenu};
    
}
export default useRestaurantMenu