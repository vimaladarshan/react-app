import React from "react";
import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

class About extends React.Component {
  componentDidMount() {
    console.log("Parent did mount called");
  }
  render() {
    return (
      <>
        <h1>Hello React</h1>
        <h2>This is about us page</h2>
        <UserCardClass
          name={"Vimaladarsan (class)"}
          city={"Thiruvarur (class)"}
        />
      </>
    );
  }
}

export default About;
