import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        add(state,actions){
            state.push(actions.payload)
        }
    }
});

export const {add} = CartSlice.actions;
export default CartSlice.reducer;