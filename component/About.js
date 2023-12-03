import User from "./User";
import UserClass from "./UserClass";

const About =()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is about page of our food app</h2>

            <User name={"Ashwini (fn component)"}/>
            <UserClass name={"Ashwini (class component)"}/>
        </div>
    )
}

export default About;