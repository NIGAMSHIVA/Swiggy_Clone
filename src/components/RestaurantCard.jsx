import {CDN_URL} from "../utils/constant"

export const RestaurantCard = ({ resDataKey }) => {
  const resKey = resDataKey?.card?.card?.info;
  const {avgRating,cuisines,costForTwo} = resDataKey?.card?.card?.info;

  console.log(resKey.cloudinaryImageId);

  return (
    <div className="resCard">
      <img
        className="res-image "
        src={
           CDN_URL+resKey.cloudinaryImageId}    
      />

      <div className="res-name">
        <h4 className="">{resKey.name}</h4>
        <h4>{avgRating}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{costForTwo }</h5>
        <h5>{resKey.sla.slaString}</h5>
      </div>
    </div>
  );
};