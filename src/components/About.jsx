import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gitData: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/NIGAMSHIVA");
    const json = await data.json();

    this.setState({
      gitData: json,
    });
  }

  render() {
    if (this.state.gitData === null) return <h1>Loading .....</h1>;

    if (this.state.gitData != null)
      return (
        <div>
          <UserClass name={this.state.gitData?.login} />
        </div>
      );
  }
}

export default About;
