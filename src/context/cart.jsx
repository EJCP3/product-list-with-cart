import { useReducer, createContext } from "react";
import { CarInitialState, CarReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(CarReducer, CarInitialState);

  const addToCart = (product) =>  dispatch({ type: "ADD_TO_CART", payload: product });

  const removeOne = (product) => dispatch({type: "REMOVE_ONE", payload: product})

  const removeCart = (product) => dispatch({type: "REMOVE_CART", payload: product})


  return { state, addToCart,removeOne,removeCart };
}

export function CartProvider({ children }) {
  const { state, addToCart,removeOne,removeCart } = useCartReducer();

  return (
    <CartContext.Provider value={{ carts: state, addToCart, removeOne,removeCart}}>
      {children}
    </CartContext.Provider>
  );
}
