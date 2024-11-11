import classnames from "classnames";
import RestroItems from "./RestroItems";
const RestroCategory = ({ res, isDivExpanded, setShowStatus }) => {
  return (
    <div className="flex flex-col items-center">
      {Array.isArray(res?.card?.card?.itemCards) ? (
        <div className="w-[800px] flex justify-between">
          <div className="flex">
            <div className="text-[18px] font-[700] my-2">
              {res?.card?.card?.title}
            </div>
            <div className="text-[18px] font-[700] my-2">
              ({res?.card?.card?.itemCards.length})
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setShowStatus();
            }}
          >
            ⬇️
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={classnames({
          "max-h-0": !isDivExpanded,
          collapse: !isDivExpanded,
        })}
      >
        {Array.isArray(res?.card?.card?.itemCards) &&
          res?.card?.card?.itemCards?.map((resCards, index) => {
            let resCardsInfo = resCards?.card?.info;
            return (
              <RestroItems key={index} itemsInfo={resCardsInfo}></RestroItems>
            );
          })}
      </div>
    </div>
  );
};
export default RestroCategory;
