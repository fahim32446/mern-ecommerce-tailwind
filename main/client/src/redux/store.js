import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from './ProductSlice';
import singleProductReducer from './singleProductSlice';
import userReducer from './userSlice'
import orderReducer from "./orderSlice";
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
  blacklist: ['productReducer', 'singleProductReducer', 'orderReducer', 'products'],
    key: 'root',
    version: 1,
    storage,
}


const rootReducer = combineReducers({
    cartReducer: cartReducer,
    products: productReducer,
    singleProductReducer: singleProductReducer,
    userReducer: userReducer,
    orderReducer: orderReducer,
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



// const store = configureStore({
//     reducer: {
//         cartReducer: cartReducer,
//         products: productReducer,
//         singleProductReducer: singleProductReducer,
//         userReducer: userReducer
//     }
// })
export let persistor = persistStore(store);

// export default store;