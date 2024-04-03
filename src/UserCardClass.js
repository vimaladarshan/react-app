import React from "react";
class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    let { count, count1 } = this.state;
    let { name, city } = this.props;
    return (
      <div className="user-card">
        <p>Name: {name}</p>
        <p>City: {city}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            console.log(this.state.count);
          }}
        >
          INCREASE
        </button>
        <p>Count: {count}</p>
      </div>
    );
  }
}
export default UserCardClass;
