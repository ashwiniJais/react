
import ResturantCard from "./ResturantCard";
import  Shimmer  from "./Shimmer";
import { useState, useEffect } from 'react';

const Body=()=>{
    const [listOfResturant, setListOfResturant]=useState([]);
    useEffect(()=>{fethcData()},[]);
    
    const fethcData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json(); 
        console.log(data);
        console.log(json);
        console.log(json?.data?.cards[5]?.card?.card.gridElements?.infoWithStyle?.restaurants);
        console.log(json.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants);
        setListOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfResturant?.length<=0){
        return <Shimmer/>
    }

    return (
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // Filter logic here
                    const filteredList=listOfResturant.filter((res)=>res.info.avgRating>3.9)
                    console.log("abc",filteredList);
                    setListOfResturant(filteredList)
                }}>Top Rated ResturantCard</button>
            </div>
            <div className='res-container'>
                {
                    listOfResturant?.map(resturant =>(
                        <ResturantCard key={resturant.id} resData={resturant} />
                    ))
                }
            </div>

        </div>
    )
}

export default Body;