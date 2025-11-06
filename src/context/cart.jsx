import { useReducer, createContext } from "react";
import { CarInitialState, CarReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(CarReducer, CarInitialState);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  return { state, addToCart };
}

export function CartProvider({ children }) {
  const { state, addToCart } = useCartReducer();

  return (
    <CartContext.Provider value={{ carts: state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
