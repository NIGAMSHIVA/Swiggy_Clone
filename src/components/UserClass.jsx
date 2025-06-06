import React from "react";

import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    console.log("Chils Rishabh Constructor is rendered");
  }

  componentDidMount() {
    console.log("ComponentDidMount Rishabh is rendered");
  }

  render() {
    
    // dont forget to put return in the class-Based Compoennt

    console.log("Child Rishabh render is rendered");
    return (
      <div className="class-comp">
        <h1>Name: {this.props.name}</h1>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Counter
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default UserClass;
