import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [dummyVar, setDummyVar] = useState([]);
  const [filterVar, setFilterVar] = useState([]);
  const [placeValue, setPlaceValue] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.397862940017443&lng=80.32161757349968&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const realData = await data.json();
    const cardsData = realData?.data?.cards || [];

    const filterRestaurants = cardsData.filter(
      (x) =>
        x?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    setDummyVar(filterRestaurants);
    setFilterVar(filterRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-10 text-xl font-semibold text-red-600">
        Looks like you are offline! Please connect to the Internet.
      </h1>
    );

  return dummyVar.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="bg-gray-50 min-h-screen">
      {/* Search and Filter */}
      <div className="bg-white shadow p-6 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="px-4 py-2 border border-gray-300 rounded w-full md:w-1/3"
            value={placeValue}
            onChange={(e) => setPlaceValue(e.target.value)}
          />

          <div className="flex gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded"
              onClick={() => {
                const searchRes = dummyVar.filter((x) =>
                  x?.card?.card?.info?.name
                    .toLowerCase()
                    .includes(placeValue.toLowerCase())
                );
                setFilterVar(searchRes);
              }}
            >
              Search
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
              onClick={() => {
                const filteredList = dummyVar.filter(
                  (x) => x?.card?.card?.info?.avgRating >= 4.0
                );
                setFilterVar(filteredList);
              }}
            >
              Top Rated 🍽️
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center p-4">
        {filterVar.map((uniq) => (
          <RestaurantCard resDataKey={uniq} key={uniq?.card?.card?.info?.id} />
        ))}
      </div>
    </main>
  );
};



// import { RestaurantCard } from "./RestaurantCard";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import useOnlineStatus from "../utils/useOnlineStatus";

// export const Body = () => {

//   const [dummyVar, setDummyVar] = useState([]); // original all 15 restaurants
//   const [filterVar, setFilterVar] = useState([]);

//   const [placeValue, setPlaceValue] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.397862940017443&lng=80.32161757349968&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//     );
//     const realData = await data.json();

//     const cardsData = realData.data.cards;

//     const filterRestaurants = cardsData.filter(
//       (x) =>
//         x?.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//     );
//     setDummyVar(filterRestaurants);
//     setFilterVar(filterRestaurants);
//   };

//   // console.log(navigator.onLine);

//   const onlineStatus=useOnlineStatus();

//   if(onlineStatus === false)
//   return <h1>Looks Like You are Offline! Please connect the Internet</h1>

//   return dummyVar.length == 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="top-Rated">
//         <div className="search_functionality">
//           <input
//             type="text"
//             value={placeValue}
//             onChange={(e) => {
//               setPlaceValue(e.target.value);
//             }}
//             />
            
//           <button
//             className="search_Restaurants"
//             onClick={() => {
//               const searchRes = dummyVar.filter((x) =>
//                 x?.card?.card?.info?.name.toLowerCase()?.includes(placeValue.toLowerCase())
//               );

              
//                 setFilterVar(searchRes);
//             ``
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <button
//           className="top-rated-button"
//           onClick={() => {
//             const filteredList = dummyVar.filter(
//               (x) => x?.card?.card?.info?.avgRating >= 4.0
//             );
//             setFilterVar(filteredList);
//           }}
//         >
//           Top-Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {filterVar.map((uniq) => 
//           <RestaurantCard resDataKey={uniq} key={uniq?.card?.card?.info?.id} />
//         )}
//       </div>
//     </>
//   );
// };
