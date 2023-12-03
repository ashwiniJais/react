import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor ");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render(){
        console.log("Parent render");
        return(
                    <div>
                        <h1>About</h1>
                        <h2>This is about page of our food app</h2>
            
                        <UserClass name={"First (class component)"}/>
                    </div>
            )
    }
}

/*
    -Parent constructor
    -Parent Render

         ----Render phase for both child----
        -Fist child constructor  
        -First child render
        -Second child constructor
        -Second child render
         
        -----Commit phase for both child -----
        -First Child componentDidmount
        -Second Child componentDidmount

    -Parent componentDidmount
                
            
    
*/


export default About;