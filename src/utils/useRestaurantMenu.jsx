import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    if (resId) fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      // ✅ Fetch menu from your backend API (connected to MongoDB)
      const response = await fetch(`http://localhost:5000/menu/${resId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // ✅ Adjust to your MongoDB schema
      setResInfo({
        restaurantId: data.restaurantId,
        restaurantName: data.restaurantName,
      });

      setResMenu(data.items); // Directly set menu items array
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return { resInfo, resMenu };
};

export default useRestaurantMenu;
