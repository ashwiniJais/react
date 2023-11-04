
import ResturantCard from "./ResturantCard";
import { useState } from 'react';
import { resList } from "../utils/mockData";

const Body=()=>{
    const [listOfResturant, setListOfResturant]=useState(resList);
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
                    listOfResturant.map(resturant =>(
                        <ResturantCard key={resturant.id} resData={resturant} />
                    ))
                }
            </div>

        </div>
    )
}

export default Body;