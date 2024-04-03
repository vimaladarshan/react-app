import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HOTEL_MENU_URL } from "../utils/constants";
const RestroMenu = () => {
  let [resHotelDetails, setResHotelDetails] = useState([]);
  let [resMenuDetails, setResMenuDetails] = useState([]);
  let inputParams = useParams();
  inputParams = inputParams.resid;
  useEffect(() => {
    restroMenuDetails();
  }, []);

  const restroMenuDetails = async () => {
    const restroData = await fetch(HOTEL_MENU_URL + inputParams);
    const restroJson = await restroData.json();
    let restroDetailsHotelData = restroJson.data.cards[2].card.card.info;
    let restroDetailsMenuData =
      restroJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    setResHotelDetails(restroDetailsHotelData);
    setResMenuDetails(restroDetailsMenuData);
  };
  return (
    <>
      <h1>{resHotelDetails?.name}</h1>
      {resMenuDetails.map((res) => (
        <>
          <h2>{res?.card?.card?.title}</h2>
          <ul>
            {Array.isArray(res?.card?.card?.itemCards) &&
              res?.card?.card?.itemCards?.map((resCards) => {
                let resCardsInfo = resCards?.card?.info;
                let price = resCardsInfo.price / 100;
                console.log(resCards?.card?.info);
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
