
import React from "react";

class UserClass extends React.Component{

    // constructor(props){

    //     super(props);



    // }


    render(){

        // dont forget to put return in the class-Based Compoennt

        return(


        <div className="class-comp">
            <h1>Name: {this.props.name}</h1>
            <h2>Language:React</h2>
            <h3>Ratings:1400+</h3>
            <h4>Love Java</h4>
        </div>

        );
        
    }
    
}

export default UserClass