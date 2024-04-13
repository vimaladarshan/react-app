import { useEffect, useState } from "react";
import { HOTEL_MENU_URL } from "./constants";
const useRestroMenuDetails = (resid) => {
  let [menuAndHotelDetails, setMenuAndHotelDetails] = useState({
    hotelData: null,
    restroData: null,
  });
  //Updating multiple indexes in same state
  const updateMenuAndHotelDetails = (index, newValue) => {
    setMenuAndHotelDetails((prevState) => {
      let newArray = { ...prevState };
      newArray[index] = newValue;
      return newArray;
    });
  };
  useEffect(() => {
    fetchRestroMenuDetails();
  }, []);
  const fetchRestroMenuDetails = async () => {
    const restroData = await fetch(HOTEL_MENU_URL + resid);
    const restroJson = await restroData.json();
    let restroDetailsHotelData = restroJson.data.cards[2].card.card.info;
    let restroDetailsMenuData =
      restroJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    updateMenuAndHotelDetails("hotelData", restroDetailsHotelData);
    updateMenuAndHotelDetails("restroData", restroDetailsMenuData);
  };
  return menuAndHotelDetails;
};
export default useRestroMenuDetails;
