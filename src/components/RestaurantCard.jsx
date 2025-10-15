import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const RestaurantCard = ({ resDataKey }) => {
  // ✅ MongoDB data is flat — no nested 'card.card.info'
  const {
    id,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    image,
    areaName,
  } = resDataKey;

  console.log(id, name);

  return (
    <Link to={`/restaurants/${id}`}>
      <div className="w-72 rounded-2xl shadow-md overflow-hidden m-4 bg-white hover:scale-105 transition-transform duration-300">
        <img
          src={CDN_URL + image}
          alt={name}
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1 truncate">{name}</h3>
          <p className="text-sm text-gray-600 truncate">
            {cuisines.join(", ")}
          </p>

          <div className="flex justify-between items-center text-sm mt-2">
            <span className="bg-green-100 px-2 py-0.5 rounded text-green-700 font-medium">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-700">{costForTwo}</span>
          </div>

          {/* 🕒 Replace Swiggy SLA with MongoDB field */}
          <p className="text-xs text-gray-500 mt-1">{deliveryTime}</p>

          {/* 🏙️ Optional — show area name */}
          <p className="text-xs text-gray-400">{areaName}</p>
        </div>
      </div>
    </Link>
  );
};



