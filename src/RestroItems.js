import { IMAGE_URL } from "../utils/constants";
import starImage from "../icons/star_347025.png";
import { useEffect, useRef, useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestroItems = ({ itemsInfo }) => {
  const dispatch = useDispatch();
  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const descriptionRef = useRef(null);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  // Check if the description exceeds 2 lines
  useEffect(() => {
    if (descriptionRef.current) {
      // Ensure the element is attached
      const element = descriptionRef.current;
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 2; // Height of two lines
      if (element.scrollHeight > maxHeight) {
        setShowButton(true); // Show "Show more" button if content exceeds two lines
      }
    }
  }, [descriptionRef]);

  let price = itemsInfo.price / 100;
  let defaultPrice = itemsInfo.defaultPrice / 100;
  let veg = itemsInfo.itemAttribute?.vegClassifier == "NONVEG" ? false : true;
  let cloudinaryImageId = itemsInfo?.imageId;
  let ratingDetails = itemsInfo?.ratings?.aggregatedRating;

  return (
    <div className="h-auto w-[800px] px-1 py-4 border-solid border-y-[0.5px] border-[#9ca3af] flex justify-between">
      <div className="basis-3/4">
        <div>{veg == true ? "🟢" : "🔴"}</div>
        <div className="font-bold">{itemsInfo.name}</div>
        <div>
          {isNaN(price) ? (
            <div className="text-[16px] font-[600]">Rs.{defaultPrice}</div>
          ) : (
            <div className="text-[16px] font-[600]">Rs.{price}</div>
          )}
        </div>
        {(() => {
          console.log();
          if (ratingDetails && Object.keys(ratingDetails).length !== 0) {
            return (
              <div className="mt-[12px] flex items-center">
                <div>
                  <img className="h-4" src={starImage} />
                </div>
                <div className="self-center">
                  {ratingDetails.rating}({ratingDetails.ratingCountV2})
                </div>
              </div>
            );
          }
        })()}
        <div className="mt-[12px] text-[#7e808c]">
          <p
            ref={descriptionRef}
            className={`overflow-hidden ${isExpanded ? "" : "line-clamp-2"}`}
          >
            {itemsInfo.description}
          </p>
          {showButton && itemsInfo.description && (
            <button
              className="mt-2 text-blue-500 hover:underline focus:outline-none"
              onClick={toggleExpand}
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
      <div className="ml-[16px] relative">
        <button
          className="w-24 bg-orange-500 opacity-80 mx-14 my-1 absolute text-white rounded-md"
          onClick={() => handleAddClick(itemsInfo)}
        >
          + Add
        </button>
        <img
          className="h-[144px] w-[156px] rounded-lg"
          alt="logo"
          src={IMAGE_URL + cloudinaryImageId}
          onError={(e) => {
            e.target.style.visibility = "hidden";
          }}
        ></img>
      </div>
    </div>
  );
};
export default RestroItems;
