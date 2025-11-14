import { useState } from "react";

import { CarbonNeuIcon, RemoveItemIcon } from "./icons";
import Order from "./Order";
import { useCart } from "../hooks/useCart";
import { useEffect } from "react";

export default function Cart() {
  const { carts, removeCart } = useCart();
  const [totalOrders, setTotalOrders] = useState(0); // 👈 estado

  useEffect(() => {
    if (carts.length > 0) {
      const total = carts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);

      setTotalOrders(total);
    } else {
      setTotalOrders(0); 
    }
  }, [carts, totalOrders]);

  const [orderA, setOrderA] = useState(false);

  return (
    <section className="bg-white p-4 mt-4 h-230  lg:w-100 rounded-lg ">
      <h2 className="text-red font-bold text-2xl mb-4">
        Your Cart ({carts.length})
      </h2>
      {carts.length > 0 ? (
        <ul className="text-center">
          {carts.map((product) => (
            <li className=" mt-4 ">
              <section className="flex justify-between items-center">
                {" "}
                <div className="">
                  <h3 className="font-bold text-sm text-left">
                    {product.name}
                  </h3>
                  <p className="text-sm">
                    <span clas sName="text-red font-bold ">
                      {product.quantity}x
                    </span>
                    <span className="text-rosi-300 font-light mx-2">
                      @ ${product.price}
                    </span>
                    <span className="text-rosi-400 font-semibold">
                      $ {product.price * product.quantity}{" "}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => removeCart(product)}
                  className="border-1 rounded-xl p-1 border-rosi-300 "
                >
                  <RemoveItemIcon />
                </button>
              </section>

              <div className="bg-gray-200 w-full h-[1px] mt-4" />
            </li>
          ))}

          <div className="flex items-center justify-between mt-6">
            <p>Order Total</p>

            <p className="font-bold text-2xl">$ {totalOrders} </p>
          </div>
          <p className="bg-rosi-50 p-4 mt-4 text-sm flex gap-x-1">
            {" "}
            <CarbonNeuIcon /> This is a{" "}
            <span className="font-bold">carbon-neutral</span> delivery
          </p>
          <button
            className="px-10 py-3 bg-red text-white rounded-2xl mt-4"
            onClick={() => setOrderA(!orderA)}
          >
            Confirm Order
          </button>
        </ul>
      ) : (
        <div className="flex  flex-col  items-center ">
          <img
            className="size-40"
            src="/illustration-empty-cart.svg"
          />
          <p className="text-rosi-400 font-bold text-sm">
            Your added items will appear here
          </p>
        </div>
      )}
      {orderA && (
        <Order
          total={totalOrders}
          products={carts}
          active={orderA}
          onClose={() => setOrderA(false)}
        />
      )}
    </section>
  );
}
