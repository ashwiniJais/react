
import useOnlineStatus from "../utils/useOnlineStatus";
import ResturantCard, {withPromotedLabel} from "./ResturantCard";
import  Shimmer  from "./Shimmer";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body=()=>{
    const [listOfResturant, setListOfResturant]=useState([]);
    const [filteredListOfResturant, setFilteredListOfResturant]=useState([]);
    const [searchText, setSearchText]=useState("");

    const RestaurantCardPromoted=withPromotedLabel(ResturantCard);

    useEffect(()=>{fethcData()},[]);//it will be callled after the component is rendered

    // console.log("Body rendered");
    
    const fethcData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json(); 
        console.log("fethcData",json);
        setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("Body rendered", filteredListOfResturant);
    }

    let onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1>Looks like you're offline</h1>
    }

    const {loggedInUser,setUserName}=useContext(UserContext);

    if(listOfResturant?.length<=0){
        return <Shimmer/>
    }

    return (
        <div className='body'>
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                    <input className="border border-solid border-black" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button className="search-btn m-4 py-2 px-4 bg-green-200 rounded-lg" onClick={()=>{
                        // filter the resturant based on search text
                        const newList=listOfResturant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setFilteredListOfResturant(newList);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 ">
                    <button className=" m-4 py-2 px-4 bg-yellow-200 rounded-lg" onClick={()=>{
                        const filteredList=listOfResturant.filter((res)=>res.info.avgRating>3.9)
                        setListOfResturant(filteredList)
                    }}>Top Rated ResturantCard</button>
                </div>
                <div  className="m-4 p-4" >
                    <label>Username: </label>
                    <input className="border border-solid border-black p-2" type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                
            </div>
            <div className='res-container flex flex-wrap'>
                {
                    filteredListOfResturant?.map(resturant =>(
                        // if restaurant is promoted -> make it highlighted
                        <Link to={"/restaurant/"+resturant.info.id}>
                            {/* {resturant.data?.promoted=true} */}
                            {resturant?.data?.promoted? <RestaurantCardPromoted resData={resturant}/>: <ResturantCard  resData={resturant}/>}
                        </Link>
                        // <ResturantCard  resData={resturant} />
                    ))
                }
            </div>

        </div>
    )
}

export default Body;