import Cart from "./components/Cart"
import Products from "./components/Products"


function App() {

  return (
    <div className="px-5">
      <h1 className="text-2xl font-bold my-2">
      Desserts
    </h1>
    <Products/>
    <Cart/>
    </div>
  )
}

export default App
