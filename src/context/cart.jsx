import { useReducer, createContext } from "react";
import { CarInitialState, CarReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(CarReducer, CarInitialState);

  const addToCart = (product) =>  dispatch({ type: "ADD_TO_CART", payload: product });

  const removeOne = (product) => dispatch({type: "REMOVE_ONE", payload: product})


  return { state, addToCart,removeOne };
}

export function CartProvider({ children }) {
  const { state, addToCart,removeOne } = useCartReducer();

  return (
    <CartContext.Provider value={{ carts: state, addToCart, removeOne}}>
      {children}
    </CartContext.Provider>
  );
}
