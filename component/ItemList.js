// import CDN_URL from "../utils/constants.js";
const ItemList=({items})=>{
    console.log(items)
    if(!items  ||!items.length){
        return ;
    }
    return(
        <div>
            {items.map(item=>
                <div className="flex justify-between border-b-2 border-gray-400">
                    <div key={item?.card?.info?.id} className=" text-left w-3/4">
                        <div className=" py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> ₹ {item?.card?.info?.price/100}</span>
                        </div>
                        <p className="text-xs pb-2">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-1/4 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 bg-black text-white rounded-lg shadow-lg"> Add + </button>
                        </div>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.card?.info?.imageId} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemList;