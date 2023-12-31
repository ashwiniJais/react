import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu= ()=>{

    const {resId}=useParams();

    const resInfo= useRestaurantMenu(resId);

    const [showIndex, setShowIndex]=useState(null);

    if(resInfo==null)
    return <Shimmer/>

    const {name,cuisines,costForTwoMessage,cloudinaryImageId}=resInfo?.cards[0]?.card?.card?.info ;

    const {itemCards}=resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);

    const categories=resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
        c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("cat",categories);

    return(
        <div className="text-center">
            <h1 className=" text-2xl font-bold my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>

            {categories.map((category, index)=>{
                return <RestaurantCategory 
                            key={category?.card?.card?.title} 
                            data={category?.card?.card} 
                            showItems={showIndex===index}
                            setShowIndex={()=>{showIndex==index?setShowIndex(null):setShowIndex(index)}}
                        />
            })}
        </div>
    )
}

export default RestaurantMenu;