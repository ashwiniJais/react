import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    console.log(cartItems);
    return (
        <div className="text-center m-10 p-4">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-1/2 m-auto p-4">
                <button className="m-auto p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
                {cartItems.length===0 && <h1 className="p-2">Add items to the cart</h1>}
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;