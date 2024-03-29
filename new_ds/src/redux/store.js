import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from './ProductSlice'
import orderReducer from "./orderSlice";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
import customerReducer from "./customerListSlice";
import totalProducts from "./totalProducts";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";


const persistConfig = {
  blacklist: ['orderReducer','products', 'category', 'customerList'],
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    products: productReducer,
    orderReducer: orderReducer,
    userReducer: userReducer,
    category: categoryReducer,
    customerList: customerReducer,
    totalProducts: totalProducts,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export let persistor = persistStore(store);