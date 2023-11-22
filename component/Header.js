import logo from '../static/img/logo.png';
import { useState, useEffect } from 'react';

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    // if no dependency array => useEffect is called on every render
    // if dependency array is empty =[] => useEffect will be called only on initial render(just once)
    // if dependency array is nonEmpty =[btnName in this case] => useEffect will be called everyTime this dependency array element will be called
    useEffect(()=>{
        console.log("useEffect of Header called");

    });
    console.log("Header is rendered");
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
                    <button onClick={()=>{btnName=="Login"?(setBtnName("Logout")):setBtnName("Login")}}>{btnName}</button>

                </ul>
            </div>
        </div>
    )
}

export default Header;