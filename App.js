import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1 id="title">Hey here!</h1>;
};
const HeadingComponent = () => {
  return (
    <>
      <TitleComponent />
      <h2 id="heading">Hello react!</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
