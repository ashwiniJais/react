import ItemList from "./ItemList";

const RestaurantCategory =({data, showItems, setShowIndex})=>{

    const handleClick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    };

    return(
        <div>
            <div className="w-1/2 mx-auto my-4 p-4 bg-gray-200 " >
                <div className="flex justify-between font-bold text-lg cursor-pointer" onClick={handleClick}>
                    <span>{data?.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={ data?.itemCards}/>}
            </div>
            
        </div>
    )
}

export default RestaurantCategory;