import React from "react";
import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent did mount called");
  }
  render() {
    console.log("parent render called");
    return (
      <>
        <h1>Hello React</h1>
        <h2>This is about us page</h2>
        <UserCardClass
          name={"Vimaladarsan (class)"}
          city={"Thiruvarur (class)"}
          child={"First"}
        />
      </>
    );
  }
}

export default About;
