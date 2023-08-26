const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

/*
<div id="parent">
  <div id="child1">
      <h1>h1 tag here</h1>
      <h2>h2 tag here</h2>
  </div>
  <div id="child2">
      <h1>h1 tag here</h1>
      <h2>h2 tag here</h2>
  </div>
 </div>
 */

const messTags = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag here"),
    React.createElement("h2", {}, "h2 tag here"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag here"),
    React.createElement("h2", {}, "h2 tag here"),
  ]),
]);

console.log(messTags);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(messTags);
