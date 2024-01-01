import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{

            // Vanilla(older) Redux=> Don't mutate the state, and returning the state was mandatory
            // const newState=[...state];
            // newState.items.push(item);
            // return newState;

            // in Redux Toolkit, we can mutate the state and returning is also not mandatory
            // Redux Toolkit uses immer behind the scenes
            // mutating the state over here
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop(); 
            // we can write better logic here
        },
        clearCart:(state,action)=>{
            // RTK says- either Mutate the existing state or return a new state
            // state.items.length=0; or //return {items:[]} 
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;