import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import {URL} from "../const/url"


export const loginUser = createAsyncThunk('user/loginUser',
    async ({login, navigate}) => {
        try {
            const res = await Axios.post(`${URL}/auth/login`, login);
            res.data.accessToken && localStorage.setItem("user", JSON.stringify(res.data.accessToken));
            navigate('../')
            return res.data;
        } catch (error) {
            return error.request.response
        }

    }
)


export const regUser = createAsyncThunk('user/regUser',
    async ({info, navigate}) => {
        console.log(info);
        try {
            const res = await Axios.post(`${URL}/auth/register`, info);
            res.data.accessToken && localStorage.setItem("user", JSON.stringify(res.data.accessToken));
            navigate('../')
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
        message: null,
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
            state.message = !action.payload.accessToken && action.payload;
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