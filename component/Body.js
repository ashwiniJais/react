
import useOnlineStatus from "../utils/useOnlineStatus";
import ResturantCard from "./ResturantCard";
import  Shimmer  from "./Shimmer";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Body=()=>{
    const [listOfResturant, setListOfResturant]=useState([]);
    const [filteredListOfResturant, setFilteredListOfResturant]=useState([]);
    const [searchText, setSearchText]=useState("");
    useEffect(()=>{fethcData()},[]);//it will be callled after the component is rendered

    // console.log("Body rendered");
    
    const fethcData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json(); 
        setListOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    let onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1>Looks like you're offline</h1>
    }

    if(listOfResturant?.length<=0){
        return <Shimmer/>
    }

    return (
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input className="search-box" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button className="search-btn" onClick={()=>{
                        // filter the resturant based on search text
                        const newList=listOfResturant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setFilteredListOfResturant(newList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfResturant.filter((res)=>res.info.avgRating>3.9)
                    setListOfResturant(filteredList)
                }}>Top Rated ResturantCard</button>
            </div>
            <div className='res-container'>
                {
                    filteredListOfResturant?.map(resturant =>(
                        <Link to={"/restaurant/"+resturant.info.id}><ResturantCard  resData={resturant} /></Link>
                        // <ResturantCard  resData={resturant} />
                    ))
                }
            </div>

        </div>
    )
}

export default Body;