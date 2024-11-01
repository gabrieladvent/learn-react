import { createContext, useState, useReducer, useContext } from "react";

const TotalPriceContext = createContext(null);
const TotalPriceDispatchContext = createContext(null);
const TotalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                total: action.payload.total,
            }
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
};

export function TotalPriceProvider ( {children} ) {
    const [totalPrice, dispatch] = useReducer( 
        TotalPriceReducer, { total : 0 }
    );
    return (
        <TotalPriceContext.Provider value= { totalPrice } >
            <TotalPriceDispatchContext.Provider value={ dispatch }>
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    );
}

export function useTotalPrice (){
    return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch (){
    return useContext(TotalPriceDispatchContext);
}