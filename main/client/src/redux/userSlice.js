import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { BaseUrl } from '../assets/Const';


export const loginUser = createAsyncThunk('user/loginUser',
    async (login) => {
        try {
            const res = await Axios.post(`${BaseUrl}/api/v1/auth/login`, login);
            res.data.accessToken && localStorage.setItem("user", JSON.stringify(res.data.accessToken));
            return res.data;
        } catch (error) {
            return error.request.response
        }

    }
)


export const regUser = createAsyncThunk('user/regUser',
    async (info) => {
        try {
            const res = await Axios.post(`${BaseUrl}/api/v1/auth/register`, info);
            console.log(res.data);
            return res.data;
        } catch (error) {
            return error.request.response
        }

    }
)



const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        user: [],
        error: null,
    },
    
    reducers: {
        removeUser: (state) => {
            state.user = [];
        }
    },

    extraReducers: (builder) => {

        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = true;
            state.user = action.payload;
            state.error = null;
            state.isLoading = false;
        });

        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = [];
            state.error = action.error;
        });



        builder.addCase(regUser.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(regUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        });

        builder.addCase(regUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = [];
            state.error = action.error;
        });

    }

})


export const { removeUser } = userSlice.actions;
export default userSlice.reducer;