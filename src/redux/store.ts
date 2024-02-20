import { configureStore, } from "@reduxjs/toolkit";

import counterReducer from "./features/counterSlice";
import modalReducer from "./features/modalSlice";
import alertReducer from "./features/alertSlice";
import confirmReducer from "./features/confirmSlice";
import toastReducer from "./features/toastSlice";
import authReducer from "./features/authSlice";

import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { menuApi } from "./services/menuApi";


export const store = configureStore({
    reducer: {
        toastReducer,
        alertReducer,
        confirmReducer,
        modalReducer,
        counterReducer,
        authReducer,
        [userApi.reducerPath]: userApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat([userApi.middleware]).concat([menuApi.middleware])
    ,
});
setupListeners(store.dispatch); // refetchOnFocus Active

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;