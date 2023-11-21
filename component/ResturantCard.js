import CDN_URL from "../utils/constants";
import { useEffect } from "react";

const ResturantCard=(props)=>{
    // console.log(props);
    useEffect(()=>{},[]);
    const {resData}=props;
    
    const {cloudinaryImageId,name,cuisines,avgRating}=resData.info;
    return (
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='resLogo' alt="res-logo" src={CDN_URL  +cloudinaryImageId}/>
            <h3>{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating+" star"}</h4>
            <h4>32 mins</h4>

        </div>
    )
}

export default ResturantCard;