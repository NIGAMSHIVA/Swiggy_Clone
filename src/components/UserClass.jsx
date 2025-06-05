import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    // dont forget to put return in the class-Based Compoennt

    return (
      <div className="class-comp">
        <h1>Name: {this.props.name}</h1>

        <button
          onClick={() => {
            this.setState ( {
              count:this.state.count+1,
          })
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
