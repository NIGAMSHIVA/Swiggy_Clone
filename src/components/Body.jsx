import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch("https://atlaserver.onrender.com/restaurants"); // 🔁 backend API endpoint
      const json = await data.json();

      // MongoDB returns clean restaurant objects directly (not nested like Swiggy)
      setRestaurants(json);
      setFilteredRestaurants(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="bg-gray-50 min-h-screen">
      {/* 🔍 Search and Filter */}
      <div className="bg-white shadow p-6 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="px-4 py-2 border border-gray-300 rounded w-full md:w-1/3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <div className="flex gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded"
              onClick={() => {
                const filtered = restaurants.filter((res) =>
                  res.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filtered);
              }}
            >
              Search
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
              onClick={() => {
                const topRated = restaurants.filter(
                  (res) => res.avgRating >= 4.0
                );
                setFilteredRestaurants(topRated);
              }}
            >
              Top Rated 🍽️
            </button>
          </div>
        </div>
      </div>

      {/* 🍔 Restaurant Cards */}
      <div className="flex flex-wrap justify-center p-4">
        {filteredRestaurants.map((res) => (
          <RestaurantCard resDataKey={res} key={res.id} />
        ))}
      </div>
    </main>
  );
};




