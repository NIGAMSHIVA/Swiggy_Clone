import UserClass from "./UserClass";
import User from "./User"

import React from "react"


class About extends React.Component{

    constructor(props){
        
        super(props)

        console.log("Parent Constructor is Rendered");
    }

    componentDidMount(){
        console.log("parent mount rendered");
    }


    render(){

        console.log("Parent render is rendered");

        return (
            <div>
              <UserClass name="Rishabh_Codes" />
              <User name="Shiva_Codes" />
            </div>
          );


    }
}


export default About