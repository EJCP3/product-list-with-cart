import Cart from "./components/Cart";
import Order from "./components/Order";
import Products from "./components/Products";

function App() {
  return (
    <div className="px-5 lg:flex gap-x-10 lg:mt-10">
    
      <Products />
      <Cart />
    </div>
  );
}

export default App;
