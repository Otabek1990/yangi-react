import { configureStore } from "@reduxjs/toolkit";
import { prodApi } from "../servises/prodApi";

export const store = configureStore({
  reducer: {
    [prodApi.reducerPath]: prodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prodApi.middleware),
});
