// reducer

import { legacy_createStore as createStore } from "redux";

const cartReducer = (
    state = {
        cart: [],
    }, 
    action
) => {
    switch (action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart: [...state.cart, action.payload],
            };
            
        default:
            return state;
    }
}

// store

const store = createStore(cartReducer);
console.log("ooncreate store: ", store.getState());

// subscribe

store.subscribe(() => {
    console.log("state changed: ", store.getState());
});

// dispatch

const action_1 = {type: "ADD_TO_CART", payload: {id: 2, qty: 1}}
store.dispatch(action_1);

const action_2 = {type: "ADD_TO_CART", payload: {id: 3, qty: 1}}
store.dispatch(action_2);