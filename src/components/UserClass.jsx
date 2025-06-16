import React from "react";

import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
//j
  }

  componentDidMount() {
  }

  

  render() {
    // dont forget to put return in the class-Based Compoennt

    return (
      <div className="class-comp">
        <h1>Name: {this.props.name}</h1>
        <h2><img src="https://avatars.githubusercontent.com/u/156409366?v=4" alt="" /></h2>
        <h3>{this.props.follo} Following</h3>

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
