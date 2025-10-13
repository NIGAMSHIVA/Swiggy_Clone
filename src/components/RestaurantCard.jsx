import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const RestaurantCard = ({ resDataKey }) => {
  const {
    avgRating,
    cuisines,
    costForTwo,
    id,
    name,
    sla,
    cloudinaryImageId,
  } = resDataKey?.card?.card?.info;

  return (
    <Link to={`/restaurants/${id}`}>
      <div className="w-72 rounded-2xl shadow-md overflow-hidden m-4 bg-white hover:scale-105 transition-transform duration-300">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1 truncate">{name}</h3>
          <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="bg-green-100 px-2 py-0.5 rounded text-green-700 font-medium">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-700">{costForTwo}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{sla?.slaString}</p>
        </div>
      </div>
    </Link>
  );
};


// import {CDN_URL} from "../utils/constant"
// import {Link} from "react-router-dom"

// export const RestaurantCard = ({ resDataKey }) => {


//   const resKey = resDataKey?.card?.card?.info;
//   const {avgRating,cuisines,costForTwo,id} = resDataKey?.card?.card?.info;

//   // console.log(id);


//   return (
//     <Link to={"/restaurants/"+id}>
//     <div className="w-70 h-75 m-4 bg-white rounded-2xl hover:scale-105 transition-transform duration-300">
//       <img
//         className="w-70 h-40 rounded"
//         src={
//            CDN_URL+resKey.cloudinaryImageId}   
//       />

//       <div className="m-1">
//         <h4 className="font-semibold px-1 truncate">{resKey.name}</h4>
//         <h5 className="px-1 text-gray-400 truncate text-xs">{cuisines.join(",")}</h5>
//         <div className="flex justify-between">
//         <h4 className="px-1 py-0.5 w-12 h-6 bg-green-200 rounded mx-1 text-green-600 text-xs">⭐{avgRating}</h4>
//         <h4 className="px-1 text-gray-700 text-xs">{costForTwo }</h4>
//         </div>
//         <h5 className="px-1 text-xs text-gray-500 mt-4">{resKey.sla.slaString}</h5>
//       </div>
//     </div>
//     </Link>
//   );
// };