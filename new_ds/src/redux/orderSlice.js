import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
const TOKEN = localStorage.getItem('user');
import { baseUrl } from '../assets/Const'


export const getOrders = createAsyncThunk('orders/getOrders',
    async () => {

        try {
            const res = await Axios.get(`${baseUrl}/api/v1/order`, {
                headers: {
                    token: `Bearer ${TOKEN.replaceAll('"', '')}`
                }
            });
            return res.data;

        } catch (error) {
            console.log(error);
        }

    }
)


export const findOrder = createAsyncThunk('orders/findOrder',
    async (id) => {

        try {
            const res = await Axios.get(`${baseUrl}/api/v1/order/find/${id}`, {
                headers: {
                    token: `Bearer ${TOKEN.replaceAll('"', '')}`
                }
            });
            return res.data;

        } catch (error) {
            console.log(error);
        }

    }
)

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        isLoading: false,
        orders: [],
        error: null,
    },
    reducers: {
        removeOrder: (state) => {
            state.orders = [];
        }
    },


    extraReducers: (builder) => {

        builder.addCase(getOrders.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
            state.error = null;
            state.isLoading = false;
        });

        builder.addCase(getOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.orders = [];
            state.error = action.error;
        });


        builder.addCase(findOrder.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(findOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
            state.error = null;
        });

        builder.addCase(findOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.orders = [];
            state.error = action.error;
        });

    }

})


export const { removeOrder } = orderSlice.actions;

export default orderSlice.reducer;