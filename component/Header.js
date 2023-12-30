import logo from '../static/img/logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    // if no dependency array => useEffect is called on every render
    // if dependency array is empty =[] => useEffect will be called only on initial render(just once)
    // if dependency array is nonEmpty =[btnName in this case] => useEffect will be called everyTime this dependency array element will be called
    useEffect(()=>{
        // console.log("useEffect of Header called");

    });
    // console.log("Header is rendered");

    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-300">
            <div className="w-56">
                <img src={logo} />
            </div>
            <div className=' items-center'>
                <ul className='flex m-4 p-4'>
                    <li className='px-1'>Online Status :{onlineStatus? '✅':'🔴' }</li>
                    <li className='px-1'><Link to='/'>Home </Link></li>
                    <li className='px-1'><Link to='/about'>About</Link></li>
                    <li className='px-1'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className='px-1'> 
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='px-1'>Cart</li>
                    <button onClick={()=>{btnName=="Login"?(setBtnName("Logout")):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;