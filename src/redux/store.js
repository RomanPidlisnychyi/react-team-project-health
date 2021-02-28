import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading";
import { modalReducer } from "./modal";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    modal: modalReducer,
  },
});

export default store;
