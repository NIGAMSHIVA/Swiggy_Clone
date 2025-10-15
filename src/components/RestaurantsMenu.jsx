import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantMenu(resId);

  if (resInfo === null || resMenu === null) return <Shimmer />;

  const { restaurantName } = resInfo;

  return (
    <div className="max-w-screen-md mx-auto p-6">
      {/* 🏠 Restaurant Header */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-pink-700 mb-2">
          {restaurantName}
        </h1>
        <p className="text-gray-600 text-sm">
          Delicious meals served fresh from our kitchen 🍽️
        </p>
      </div>

      {/* 🍲 Menu Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu Items</h2>

      <div className="space-y-4">
        {resMenu.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-center hover:bg-gray-50 transition"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {item.name}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              )}
            </div>
            <div className="text-right text-pink-700 font-semibold">
              ₹{item.price / 100 || item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;


