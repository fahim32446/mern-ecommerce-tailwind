import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { baseUrl } from '../assets/Const'
const TOKEN = localStorage.getItem('user');

export const getProducts = createAsyncThunk('products/getProducts',
    async () => {
        const res = await Axios.get(`${baseUrl}/api/v1/product`, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
                 
            }
        });
        return res.data;
    }
)

export const createProduct = createAsyncThunk('products/createProduct',
    async (product) => {

        const res = await Axios.post(`${baseUrl}/api/v1/product`, product, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
            }
        });
        return res.data;
    }
)


export const deleteProduct = createAsyncThunk('products/deleteProduct',
    async (id) => {
        const res = await Axios.delete(`${baseUrl}/api/v1/product/${id}`, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
            }
        });
        return res.data;
    }
)

export const updateProduct = createAsyncThunk('products/updateProduct',
    async (product) => {

        const res = await Axios.put(`${baseUrl}/api/v1/product/${product._id}`, product, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
            }
        });
        return res.data;
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        products: [],
        error: null,
    },
    reducers: {
        removeProduct: (state) => {
            state.products = [];
        }
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



        builder.addCase(createProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products.push(action.payload);
            state.error = null;
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });


        builder.addCase(deleteProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = state.products.filter((item) => item._id !== action.payload._id)
            state.error = null;

        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });


        builder.addCase(updateProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.products = state.products.filter((item) => item._id !== action.payload._id)
            state.error = null;

        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error;
        });

    }

})

export const { removeProduct } = productSlice.actions;

export default productSlice.reducer;