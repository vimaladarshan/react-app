import { Link } from "react-router-dom";
import starImage from "../icons/star_347025.png";
import { IMAGE_URL } from "../utils/constants";
//comments
const RestroCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, areaName } =
    props.restroListData;
  let id = "/restaurant/" + props.restroListData.id;
  return (
    <div className="mx-6 my-6 h-auto w-64 bg-white shadow-lg p-4 rounded-lg">
      <img
        className="h-48 w-full rounded-lg"
        alt="logo"
        src={IMAGE_URL + cloudinaryImageId}
      ></img>
      <h3 className="mt-2">{name}</h3>
      <div className="flex mt-2">
        <img className="h-4" src={starImage} />
        <h4 className="ml-1 text-xs">{avgRatingString}</h4>
      </div>
      <div className="text-xs mt-2">{cuisines.join(", ")}</div>
      <div className="text-xs mt-2">{areaName}</div>
      <Link className="text-xs mt-2" to={id}>
        click here
      </Link>
    </div>
  );
};
export default RestroCard;
