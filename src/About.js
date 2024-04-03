import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

const About = () => {
  return (
    <>
      <h1>Hello React</h1>
      <h2>This is about us page</h2>
      <UserCard
        name={"vimaladarsan (function)"}
        city={"Thiruvarur (function)"}
      />
      <UserCardClass
        name={"Vimaladarsan (class)"}
        city={"Thiruvarur (class)"}
      />
    </>
  );
};
export default About;
