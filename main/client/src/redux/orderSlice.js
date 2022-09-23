import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { BaseUrl } from '../assets/Const';

export const createOrder = createAsyncThunk('orders/createOrder',
    async (information) => {

        const {user, cart, total, address} = information;
        console.log(information);

        try {

            
            // const res = await Axios.post(`${BaseUrl}/api/v1/order`, {
            //     name: user.name,
            //     email: user.email,
            //     userId: user._id,
            //     products: cart.map((item) => ({
            //         title: item.title,
            //         productId: item._id,
            //         color: item.color,
            //         size: item.size,
            //         quantity: item._quantity,
            //     })),
            //     amount: total,
            //     address: address.billing_details,
            // });

            // return res.data;
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
    }, extraReducers: (builder) => {

        builder.addCase(createOrder.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
            state.error = null;
        });

        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.orders = [];
            state.error = action.error;
        });

    }

})



export default orderSlice.reducer;