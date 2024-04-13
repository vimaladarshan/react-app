import React from "react";
class UserCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: [] };
    console.log(this.props.child + " Child constructor called");
  }
  async componentDidMount() {
    console.log(this.props.child + " Child did mount called");
    let fetchData = await fetch("https://api.github.com/users/vimaladarshan");
    fetchData = await fetchData.json();
    console.log(fetchData);
    this.setState({ userDetails: fetchData });
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component going to unmount");
  }
  render() {
    console.log(this.props.child + " child render called");
    console.log(this.state);
    let { login, location } = this.state.userDetails;
    return (
      <div className="user-card">
        <p>Name: {login}</p>
        <p>City: {location}</p>
      </div>
    );
  }
}
export default UserCardClass;
