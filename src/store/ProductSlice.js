import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from '../utils/StatusCode';

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state,actions){
    //     state.data = actions.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, actions) => {
        state.status = StatusCode.LOADING
      })
      .addCase(getProducts.fulfilled, (state, actions) => {
        state.data = actions.payload;
        state.status = StatusCode.IDLE
      })
      .addCase(getProducts.rejected, (state,actions)=>{
        state.status = StatusCode.ERROR
      })
  },
});

export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//        await fetch("https://fakestoreapi.com/products")
//       .then((data) => data.json())
//       .then((result) => {
//         // console.log("result-->", result);
//         dispatch(fetchProducts(result));
//       })
//       .catch((err) => {
//         console.log("err-->", err);
//       });

//     }
// }
