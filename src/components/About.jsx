import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

  componentWillUnmount(){
    console.log("Component is Unmounted")
  }

  componentDidUpdate(){
    console.log("Component is Updated")

  }

  constructor(props) {
    super(props);

    this.state = {
      gitData: null,
    };
  }


  debugger;


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
          <UserClass name={this.state.gitData?.login}  follo={this.state.gitData.following}/>
        </div>
      );
  }
}

export default About;
