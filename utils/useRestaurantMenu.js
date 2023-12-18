import { useEffect,useState } from "react";
import { RESTARURANT_API } from "./constants";

const useRestaurantMenu =(resId)=>{
    // fetch data

    const [resInfo,setResInfo]=useState(null);

    useEffect (()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data= await fetch(RESTARURANT_API+resId);
        const json =await data.json();

        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;