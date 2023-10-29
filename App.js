import React from 'react';
import ReactDOM from 'react-dom/client';

const root=ReactDOM.createRoot(document.getElementById("root"));
 // React Functional 
 
const Title=()=><h1>Hello from title i.e comp 1</h1>;




const number=1000;
const HeadingComponent=()=>{
    return( 
        <div id="heading">
            <Title/>
            <Title></Title>
            {Title()}
            <h1>Hello React Functional based component</h1>
        </div>)}


root.render(<HeadingComponent/>); 