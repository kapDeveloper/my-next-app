//store.ts
import {configureStore} from "@reduxjs/toolkit";
import {productsAPI} from "@/redux/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [productsAPI.reducerPath]: productsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsAPI.middleware),
});
setupListeners(store.dispatch);



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;