import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { klakApi } from "../services/apiSlice";

export const store = configureStore({
    reducer: {
        [klakApi.reducerPath]: klakApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(klakApi.middleware),
    devtTools: true
});

setupListeners(store.dispatch);