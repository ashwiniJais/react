import CDN_URL from "../utils/constants";
import { useEffect } from "react";

const ResturantCard=(props)=>{
    // console.log(props);
    useEffect(()=>{},[]);
    const {resData}=props;
    
    const {cloudinaryImageId,name,cuisines,avgRating}=resData.info;
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200'> 
            <img className='resLogo rounded-lg' alt="res-logo" src={CDN_URL  +cloudinaryImageId}/>
            <h3 className="font-bold py-2">{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating+" star"}</h4>
            <h4>32 mins</h4>

        </div>
    )
}

// Higher order component
// input - RestaurantCard=> RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                {/* add some css to this label for better visibility */}
                <label >Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
    
}

export default ResturantCard;