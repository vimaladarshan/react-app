import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestroMenuDetails from "../utils/useRestroMenuDetails";
import RestroCategory from "./RestroCategory";
const RestroMenu = () => {
  let inputParams = useParams();
  inputParams = inputParams.resid;
  const [isDivExpanded, setIsDivExpanded] = useState();
  /**
   * custom hooks for fetching the data
   */
  const restroResults = useRestroMenuDetails(inputParams);

  let resHotelDetails = restroResults?.hotelData;
  let resMenuDetails = restroResults?.restroData;
  return (
    <div className="flex flex-col items-center">
      <div className="w-[800px] flex">
        <div className="text-[24px] font-[800]">{resHotelDetails?.name}</div>
      </div>
      {resMenuDetails?.map((res, index) => (
        <RestroCategory
          key={index}
          res={res}
          isDivExpanded={index === isDivExpanded ? true : false}
          setShowStatus={() => setIsDivExpanded(index)}
        />
      ))}
    </div>
  );
};
export default RestroMenu;
