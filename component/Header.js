import logo from '../static/img/logo.png';
import { useState } from 'react';

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
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