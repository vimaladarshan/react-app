import { Link } from "react-router-dom";
import starImage from "../icons/star_347025.png";
import { IMAGE_URL } from "../utils/constants";
//comments
const RestroCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, areaName } =
    props.restroListData;
  let id = "/restaurant/" + props.restroListData.id;
  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        alt="logo"
        src={IMAGE_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <div>{cuisines.join(", ")}</div>
      <div className="restro-rating">
        <div className="star-rating-image">
          <img src={starImage} />
        </div>
        <h4>{avgRatingString}</h4>
      </div>
      <div>{areaName}</div>
      <Link to={id}>click here</Link>
    </div>
  );
};
export default RestroCard;
