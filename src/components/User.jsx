import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    console.log("Child shiva Constructor rendered");
  }


  componentDidMount() {
    console.log("ComponentDidMount shiva is rendered");
  }


  render() {
    console.log("Childshiva Render is rendered");
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

export default User;
