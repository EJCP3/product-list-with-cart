import { useCart } from "../hooks/useCart";

export default function Order({ active, onClose, products,total }) {
  console.log(products);

  const {removeAll} = useCart()

  return (
    <div
      className={`${
        active ? "flex" : "hidden"
      } fixed inset-0 items-end justify-center bg-black/40 z-50 `}
    >
      2
      <section className="bg-white w-[100%] h-[85%] max-w-sm p-6 rounded-2xl shadow-xl text-center overflow-y-scroll">
        {/* Header */}
        <header className="flex flex-col items-left gap-2 text-left">
          <img
            src="src/assets/icon-order-confirmed.svg"
            alt="Order confirmed"
            className="w-12 h-12"
          />
          <h2 className="text-4xl font-extrabold w-2 ">Order Confirmed</h2>
          <p className="text-gray-600 text-sm">We hope you enjoy your food!</p>
        </header>

        <section className="bg-rosi-50 p-4 mt-6 rounded-xl text- ">
          <ul>
            {products.map((product, index) => (
              <li key={product.name} className="">
                <div className="flex justify-between items-center ">
                  {" "}
                  <img
                    className="size-12 rounded-sm"
                    src={product.image.thumbnail}
                  alt={product.name}
                  />{" "}
                  <div className="pr-10">
                    {" "}
                    <h3 className=" font-bold text-sm">
                     {product.name}
                    </h3>{" "}
                    <p className="text-sm">
                      {" "}
                      <span className="text-red-600 font-bold">{product.quantity}x</span>{" "}
                      <span className="text-gray-500 mx-2">${product.price}</span>{" "}
                    </p>{" "}
                  </div>{" "}
                  <p className="font-semibold">  ${product.price * product.quantity}</p>{" "}
                  <div className=" border-t border-gray-300 my-4" />
                </div>
                <div className=" border-t border-gray-300 my-4" />
              </li>
            ))}
          </ul>
        
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">Order Total</p>
            <p className="font-bold text-2xl">${total}</p>
          </div>
        </section>

        {/* Button */}
        <button
          onClick={()=> {
            onClose()
            removeAll()
          }}
          
          className="w-full py-3 bg-red-600 text-white rounded-xl mt-6 hover:bg-red-700 transition"
        >
          Start New Order
        </button>
      </section>
    </div>
  );
}
