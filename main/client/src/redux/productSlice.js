import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { BaseUrl } from '../assets/Const';


export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        try {
            const res = await Axios.get(`${BaseUrl}/api/v1/product`);
            return res.data;
        } catch (error) {
            console.log(error);
        }

    }
)

export const getProductsByCat = createAsyncThunk('products/getProductsByCat',
    async (cat) => {
        try {
            const res = await Axios.get(`${BaseUrl}/api/v1/product?category=${cat}`);
            return res.data;
        } catch (error) {
            console.log(error);
        }

    }
)

export const sizeFilter = createAsyncThunk('products/sizeFilter',
    async (size) => {
        try {
            const res = await Axios.get(`${BaseUrl}/api/v1/product?filter=${size}`);
            return res.data;
        } catch (error) {
            console.log(error);
        }

    }
)


export const searchProduct = createAsyncThunk('products/searchProduct',
    async (search) => {
        try {
            const res = await Axios.get(`${BaseUrl}/api/v1/product?search=${search}`);
             return res.data;
        } catch (error) {
            console.log(error);
        }

    }
)


export const priceFilter = createAsyncThunk('products/priceFilter',
    async (price) => {
       
        try {
            const res = await Axios.get(`${BaseUrl}/api/v1/product?price=${price}`);
             return res.data;
        } catch (error) {
            console.log(error);
        }

    }
)



const productSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        products: [],
        error: null,
    },


    extraReducers: (builder) => {

        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        });

        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });


        builder.addCase(getProductsByCat.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getProductsByCat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        });

        builder.addCase(getProductsByCat.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });



        builder.addCase(sizeFilter.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(sizeFilter.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        });

        builder.addCase(sizeFilter.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });



        builder.addCase(searchProduct.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(searchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        });

        builder.addCase(searchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });




        builder.addCase(priceFilter.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(priceFilter.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        });

        builder.addCase(priceFilter.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });


    }

})


export default productSlice.reducer;