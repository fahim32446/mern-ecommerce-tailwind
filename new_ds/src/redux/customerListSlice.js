import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { baseUrl } from '../assets/Const';
const TOKEN = localStorage.getItem('user') || null;



export const getCustomerList = createAsyncThunk('customers/getCustomerList',
    async () => {
        const res = await Axios.get(`${baseUrl}/api/v1/user`, {
            headers: {
                token: `Bearer ${TOKEN.replaceAll('"', '')}`
                 
            }
        });
        return res.data;
    }
)


const customerList = createSlice({
    name: "customers",
    initialState: {
        isLoading: false,
        user: [],
        error: null,
    },

    extraReducers: (builder) => {
        
        builder.addCase(getCustomerList.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCustomerList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.customers = action.payload;
            state.error = null;

        });
        builder.addCase(getCustomerList.rejected, (state, action) => {
            state.isLoading = false;
            state.customers = [];
            state.error = action.error;
        });

    }

})


export default customerList.reducer;