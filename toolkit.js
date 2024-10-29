import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";


const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer( [], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

const loginReducer = createReducer({ status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({ 
    reducer: {
        cart: cartReducer,
        login: loginReducer
    },
});
console.log("ooncreate store: ", store.getState());


store.subscribe(() => {
    console.log("state changed: ", store.getState());
});

store.dispatch(addToCart({id: 1, qty: 1}));
store.dispatch(login())
