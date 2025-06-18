import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);

  if (resInfo === null || resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="max-w-screen-md mx-auto p-6">
      {/* Restaurant Header */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-pink-700 mb-2">{name}</h1>
        <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
        <div className="flex justify-between mt-3 text-sm text-gray-700">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
            ⭐ {avgRating}
          </span>
          <span>{costForTwoMessage}</span>
        </div>
      </div>

      {/* Menu Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu 🍽️</h2>

      <div className="space-y-4">
        {resMenu.map((item) => {
          const info = item?.card?.info;
          return (
            <div
              key={info?.id}
              className="p-4 bg-white rounded-lg shadow flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {info?.name}
                </h3>
                {info?.description && (
                  <p className="text-sm text-gray-500 mt-1">
                    {info.description}
                  </p>
                )}
              </div>
              <div className="text-right text-pink-700 font-semibold">
                ₹{info?.price / 100 || info?.defaultPrice / 100}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { useParams } from "react-router-dom";


// const RestaurantMenu = () => {
  
//   const { resId } = useParams();

//   const {resInfo,resMenu}=useRestaurantMenu(resId);

  
//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[2]?.card?.card?.info;

//   if (resMenu === null) return <Shimmer />;

//   // const { name, category, description } = resMenu?.card.info;

//   return (
//     <div className="Menu-Res">
//       <h1>{name}</h1>
//       <p>{cuisines.join(",")}</p>
//       <h3>{costForTwoMessage}</h3>

//       <h2>Menu</h2>

//       {resMenu.map((x) => {
//         return (
//           <p key={x?.card?.info?.id}>
//             {x?.card?.info?.name} {"Rs-"} {x?.card?.info?.price / 100}
//           </p>
//         );
//       })}
//     </div>
//   );
// };

// export default RestaurantMenu;
