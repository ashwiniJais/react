import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './static/img/logo.png';
import { resList } from './static/data/resList';

const root=ReactDOM.createRoot(document.getElementById("root"));

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -ResturantContainer
 *      -Resturant card
 *          -Img
 *          -name of resturant, Star Rating, cuisine,delivery time etc
 * 
 * Footer
 *  -CopyRight
 *  -Links
 *  -Address
 *  -Contact 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const Header=()=>{
    return (
        <div className="header">
            <div className="logoContainer">
                <img className='logo' src={logo} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard=(props)=>{
    // console.log(props);
    const {resData}=props;
    
    const {cloudinaryImageId,name,cuisines}=resData?.info;
    return (
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='resLogo' alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>4 Star</h4>
            <h4>32 mins</h4>

        </div>
    )
}

const Body=()=>{
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {
                    resList.map(resturant =>(
                        <ResturantCard key={resturant.info.id} resData={resturant} />
                    ))
                }
            </div>

        </div>
    )
}


const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            
        </div>
    );
}

root.render(<AppLayout/>); 