import React from "react";
import Product from "./Product";
import { useState } from "react";
import { CarbonNeuIcon, RemoveItemIcon } from "./icons";
export default function Cart() {
  const [product, setProduct] = useState("d");

  return (
    <section className="bg-white p-4 mt-4">
      <h2 className="text-red font-bold text-2xl mb-4">Your Cart (1)</h2>
      {product ? (
        <ul className="text-center">
          <li className=" mt-4 ">
            <section className="flex justify-between items-center">
              {" "}
              <div className="">
                <h3 className="font-bold text-sm text-left">Classic Tiramisu</h3>
                <p className="text-sm">
                  <span className="text-red font-bold ">1x</span>
                  <span className="text-rosi-300 font-light mx-2">@ $5.50</span>
                  <span className="text-rosi-400 font-semibold">$5.50</span>
                </p>
              </div>
                <button className="border-1 rounded-xl p-1 border-rosi-300 ">
                  <RemoveItemIcon />
                </button>
            </section>

            <div className="bg-gray-200 w-full h-[1px] mt-4" />
          </li>
          
          <div className="flex items-center justify-between mt-6">
            <p>Order Total</p>
            
            <p className="font-bold text-2xl">$46.50</p>
          </div>
          <p className="bg-rosi-50 p-4 mt-4 text-sm flex gap-x-1">
            {" "}
            <CarbonNeuIcon /> This is a{" "}
            <span className="font-bold">carbon-neutral</span> delivery
          </p>
          <button className="px-10 py-3 bg-red text-white rounded-2xl mt-4 ">
            Confirm Order
          </button>
        </ul>
      ) : (
        <div className="flex  flex-col  items-center ">
          <img
            className="size-40"
            src="src/assets/illustration-empty-cart.svg"
          />
          <p className="text-rosi-400 font-bold text-sm">
            Your added items will appear here
          </p>
        </div>
      )}
    </section>
  );
}
