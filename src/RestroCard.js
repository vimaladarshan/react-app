import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
//comments
const RestroCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, areaName } =
    props.restroListData;
  let id = "/restaurant/" + props.restroListData.id;
  return (
    <div className="mx-4 my-4 h-96 scale-100 bg-white shadow-lg p-4 rounded-lg relative hover:scale-105 row-end-auto">
      <Link to={id}>
        <img
          className="h-48 w-full rounded-lg"
          alt="logo"
          src={IMAGE_URL + cloudinaryImageId}
        ></img>
        <h3 className="mt-2">{name}</h3>
        <div className="flex mt-2">
          <img className="h-4" src={require("../icons/star_347025.png")} />
          <h4 className="ml-1 text-xs">{avgRatingString}</h4>
        </div>
        <div className="text-xs mt-2">{cuisines.join(", ")}</div>
        <div className="text-xs mt-2">{areaName}</div>
      </Link>
    </div>
  );
};
export const withOfferLabel = (RestroCard) => {
  return (props) => {
    const { header, subHeader } = props.restroListData.aggregatedDiscountInfoV3;
    return (
      <div>
        <div className="max-w-fit ml-auto mr-5">
          <button className="text-xs font-bold rounded-lg bg-amber-500 px-1 py-1 text-white shadow-sm">
            {header} {subHeader}
          </button>
        </div>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
