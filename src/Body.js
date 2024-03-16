import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [restroDetails, setRestroDetails] = useState([]);
  let [filteredRestroDetails, setFilteredRestroDetails] = useState([]);
  let [searchText, setSearchText] = useState("");
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
    setFilteredRestroDetails(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restroDetails.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter-btn">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            restroDetails = restroDetails.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestroDetails(restroDetails);
          }}
        >
          Search
        </button>
        <button
          className="restro-btn"
          onClick={() => {
            restroDetails = restroDetails.filter((res) => {
              return res.info.avgRating > 4.4;
            });
            setFilteredRestroDetails(restroDetails);
          }}
        >
          Top Rated restaurants
        </button>
      </div>

      <div className="restro-container">
        {filteredRestroDetails.map((restaurant) => (
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
