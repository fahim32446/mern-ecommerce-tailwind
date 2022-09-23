import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { BaseUrl } from '../assets/Const';


export const getProduct = createAsyncThunk('SingleProduct/getProduct',
    async (id) => {
        const res = await Axios.get(`${BaseUrl}/api/v1/product/find/${id}`);

        return res.data;

    }
)



const singleProductSlice = createSlice({
    name: "SingleProduct",
    initialState: {
        isLoading: false,
        SingleProduct: [],
        error: null,
    }, extraReducers: (builder) => {


        builder.addCase(getProduct.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.SingleProduct = action.payload;
            state.error = null;
        });

        builder.addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.SingleProduct = [];
            state.error = action.error;
        });
    }

})



export default singleProductSlice.reducer;