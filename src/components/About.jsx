import UserClass from "./UserClass";
import React from "react";

import { useState, useEffect } from "react";

class About extends React.Component {


  componentDidUpdate() {
    console.log("Component is Updated");
  }

  constructor(props) {
    super(props);

    this.state = {
      gitData: null,
    };
  }

  async  componentDidMount() {
    const data = await fetch("https://api.github.com/users/NIGAMSHIVA");
    const json = await data.json();

    this.setState({
      gitData: json,
    });

     this.setId = setInterval(() => {
      console.log("Shiva Is a Cool Boy");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setId);
  }
  render() {
    if (this.state.gitData === null) return <h1>Loading .....</h1>;

    if (this.state.gitData != null)
      return (
        <div>
          <UserClass
            name={this.state.gitData?.login}
            follo={this.state.gitData.following}
          />
        </div>
      );
  }
}

export default About;
