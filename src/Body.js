import restroList from "../data/restroList.json";
import RestroCard from "./RestroCard";
const restroDetails =
  restroList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
const Body = () => {
  return (
    <div className="Body">
      <div className="search-bar">Search</div>
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
