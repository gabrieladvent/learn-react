import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
console.log("ooncreate store: ", store.getState());


store.subscribe(() => {
    console.log("state changed: ", store.getState());
});

export default store;