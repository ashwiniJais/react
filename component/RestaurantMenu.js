import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTARURANT_API } from "../utils/constants";

const RestaurantMenu= ()=>{

    const {resId}=useParams();
    console.log(resId);

    const [resInfo, setResInfo]=useState(null);

    useEffect(() => {
        console.log("useEffect from Restaurant menu");
        fetchMenu();
    }, []);

    const fetchMenu =async ()=>{
        console.log("useEffect from Restaurant menu")
        const data=await fetch(RESTARURANT_API+resId);
        // const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=341033&catalog_qa=undefined&submitAction=ENTER')

        const json=await data.json();
        // console.log(json);
        setResInfo(json.data);
        console.log(resInfo);
        console.log(resInfo?.cards[0]?.card?.card?.info);
        
    }

    if(resInfo==null)
    return <Shimmer/>

    const {name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo?.cards[0]?.card?.card?.info ;

    const {itemCards}=resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>

            <h1>{costForTwoMessage}</h1>
            <h1>{cloudinaryImageId}</h1>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) =>{

                    const {name,id,defaultPrice}=item?.card?.info; 
                    console.log(item?.card?.info);
                    console.log("I am don");
                    // const defaultPriceString=defaultPrice.toString()||"999000";
                    // const priceInRs=defaultPriceString.slice(0,-2);
                    return (<li key={id}>{name} - {defaultPrice/100}</li>)
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;