import { useState } from "react";
const UserCard = ({ name, city }) => {
  let [count] = useState(0);
  return (
    <div className="user-card">
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>Count: {count}</p>
    </div>
  );
};
export default UserCard;
