import { useCart } from "../hooks/useCart";
import { AddCartIcon } from "./icons";

export default function Product({product}) {

  const {addToCart,carts} = useCart()

  console.log(carts)


  return (
    <div className="">
      <figure className="relative mb-6">
        <img src={product.image.desktop} className="w-full h-50 rounded-xl" />
        <div className="absolute  -bottom-4 translate-x-1/2 ">
          <button onClick={() => addToCart(product)} className=" flex  bg-white py-3 px-7 border-1 border-rosi-500   rounded-4xl gap-x-1 font-semibold text-base ">
            <AddCartIcon />
            Add To Cart
          </button>
        </div>
      </figure>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-xs text-rosi-300 font-semibold"> {product.category} </h3>
        <h1 className="text-sm font-semibold"> {product.name} </h1>
        <span className="text-rosi-500 font-bold">${product.price} </span>
      </div>
    </div>
  );
}
