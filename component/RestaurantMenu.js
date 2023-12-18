import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu= ()=>{

    const {resId}=useParams();

    const resInfo= useRestaurantMenu(resId);

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