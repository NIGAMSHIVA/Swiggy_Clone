import { useEffect,useState } from "react";
import RestaurantMenu from "../components/RestaurantsMenu";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    const [resMenu,setResMenu]=useState(null);

    useEffect(()=>{

        fetchMenu()

    },[])


    const fetchMenu=async ()=>{

 const menuData = await fetch("https://mp8374e1f2556feca1b5.free.beeceptor.com/menu/905190")
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