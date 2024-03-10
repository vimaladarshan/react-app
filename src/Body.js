import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [restroDetails, setRestroDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestroDetails(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restroDetails.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="Body">
      <button
        className="restro-btn"
        onClick={() => {
          restroDetails = restroDetails.filter((res) => {
            return res.info.avgRating > 4.5;
          });
          setRestroDetails(restroDetails);
        }}
      >
        Top Rated restaurants
      </button>
      <div className="restro-container">
        {restroDetails.map((restaurant) => (
          <RestroCard
            key={restaurant.info.id}
            restroListData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
