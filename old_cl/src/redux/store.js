import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  cartSlice  from "./cartSlice";
import userSlice from "./userSlice";

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
    blacklist: [],
    key: 'root',
    version: 1,
    storage,
}


const rootReducer = combineReducers({
    cartSlice: cartSlice,
    userSlice: userSlice
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

// export default store;