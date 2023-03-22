import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../features/api/bookStore";

export const store = configureStore({
  reducer: {
    [bookSlice.reducerPath]: bookSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(bookSlice.middleware),
});
