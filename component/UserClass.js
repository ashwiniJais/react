import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state ={
            count:0,
        }
    }

    render(){
        // or destructure it on the fly before using the props
        return (
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    // don't update state variable like this.state.count=this.state.count+1
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count Increase</button>
                <h2>Nmae: {this.props.name}</h2>
                <h2>Location: India</h2>
            </div>
        )
    }
}

export default UserClass;