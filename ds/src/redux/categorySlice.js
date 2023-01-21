import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { baseUrl } from '../assets/Const'
const TOKEN = localStorage.getItem('user');


export const createCategory = createAsyncThunk('category/createCategory',
    async (category) => {
    console.log(category);
        const res = await Axios.post(`${baseUrl}/api/v1/category`, category, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
            }
        });
        return res.data;
    }
)


export const getCategories = createAsyncThunk('categories/getCategories',
    async () => {
        const res = await Axios.get(`${baseUrl}/api/v1/category`, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
            }
        });
        return res.data;
    }
)


export const updateCategories = createAsyncThunk('categories/updateCategories',
    async (id, categories) => {
        console.log(categories);

        const res = await Axios.put(`${baseUrl}/api/v1/category/${id}`, categories, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
            }
        });
        return res.data;
    }
)


const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        isLoading: false,
        categories: [],
        error: null,
    },

    extraReducers: (builder) => {


        builder.addCase(createCategory.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories.push(action.payload);
            state.error = null;
        });
        builder.addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.categories = [];
            state.error = action.error;
        });



        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
            state.error = null;
        });

        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.categories = [];
            state.error = action.error;
        });



        builder.addCase(updateCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = state.categories.filter((item) => item._id !== action.payload._id)
            state.error = null;

        });
        builder.addCase(updateCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.categories = [];
            state.error = action.error;
        });
    }

})


export default categoriesSlice.reducer;