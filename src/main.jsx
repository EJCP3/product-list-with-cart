import { createRoot } from "react-dom/client";
import "@fontsource-variable/red-hat-text";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/cart.jsx";

createRoot(document.getElementById("root")).render(
 <CartProvider>
    <App />
 </CartProvider>
);
