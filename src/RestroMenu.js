import { useParams } from "react-router-dom";
import useRestroMenuDetails from "../utils/useRestroMenuDetails";
const RestroMenu = () => {
  let inputParams = useParams();
  inputParams = inputParams.resid;
  /**
   * custom hooks for fetching the data
   */
  const restroResults = useRestroMenuDetails(inputParams);

  let resHotelDetails = restroResults?.hotelData;
  let resMenuDetails = restroResults?.restroData;
  return (
    <>
      <h1>{resHotelDetails?.name}</h1>
      {resMenuDetails?.map((res) => (
        <>
          <h2>{res?.card?.card?.title}</h2>
          <ul>
            {Array.isArray(res?.card?.card?.itemCards) &&
              res?.card?.card?.itemCards?.map((resCards) => {
                let resCardsInfo = resCards?.card?.info;
                let price = resCardsInfo.price / 100;
                return (
                  <>
                    <li>
                      {resCardsInfo.name} - Rs.{price}
                    </li>
                  </>
                );
              })}
          </ul>
        </>
      ))}
    </>
  );
};
export default RestroMenu;
