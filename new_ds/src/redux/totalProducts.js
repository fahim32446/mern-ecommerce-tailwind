import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { baseUrl } from "../assets/Const";
const TOKEN = localStorage.getItem("user");

export const getTotalProducts = createAsyncThunk(
  "totalProduct/getTotalProducts",
  async () => {
    try {
      const res = await Axios.get(
        `${baseUrl}/api/v1/product/totalProducts`,
        {
          headers: {
            token: `Bearer ${TOKEN.replaceAll('"', "")}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const totalProductsSlice = createSlice({
  name: "totalProduct",
  initialState: {
    isLoading: false,
    totalProduct: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getTotalProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTotalProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totalProduct = action.payload;
      state.error = null;
    });
    builder.addCase(getTotalProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.totalProduct = [];
      state.error = action.error;
    });
  },
});

export default totalProductsSlice.reducer;
