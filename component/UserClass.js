import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props.name +" Constructor");

        this.state ={
            userInfo:{
                name: "Still fetching...",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        console.log(this.props.name +" componentDidMount");
        const data =await fetch("https://api.github.com/users/ashwiniJais");
        const json=await data.json();

        console.log(json);

        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    render(){
        console.log(this.props.name +"  render");
        const {name,location, avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                    <img src={avatar_url}></img>

                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;

/*
    ---MOUNTING---
    constructor(dummy)
    render(dummy)
        <HTML (dummy data)>

    component Did Mount
        <API call>
        <this.setState > - it updates the dummy data with new data

    ---UPDATE---
        render(API data)
            <HTML original data>
        component did update

*/