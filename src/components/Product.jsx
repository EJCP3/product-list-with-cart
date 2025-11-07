import { useCart } from "../hooks/useCart";
import { AddCartIcon, IncrementIcon, DecrementIcon } from "./icons";

export default function Product({ product }) {
  const { addToCart, carts, removeOne } = useCart();

const checkProductInCart = (product) => {
  const item = carts.find((item) => item.id === product.id);
  return item?.quantity ?? 0;
};




  return (
    <div className="">
      <figure className="relative mb-6">
        <img src={product.image.desktop} className="w-full h-50 rounded-xl" />
        <div className="absolute  -bottom-4 translate-x-1/2 ">

          {checkProductInCart(product) > 0 ? (
            <div className="flex bg-red py-3 px-7 border-1 rounded-4xl gap-x-1 w-40 justify-between items-center">
              <span onClick={() => addToCart(product)} className="flex justify-center items-center size-5 border-1 rounded-full border-white ">
                <IncrementIcon />
              </span>
              <span className=" text-white"> {checkProductInCart(product)} </span>
              <span onClick={() => removeOne(product)} className="flex justify-center items-center size-5 border-1 rounded-full border-white">
                <DecrementIcon />
              </span>
            </div>
          ) : (
            <button onClick={() => addToCart(product)} className="flex bg-white py-3 px-7 border-1 border-rosi-500 rounded-4xl gap-x-1 font-semibold text-base">
              <AddCartIcon />
              Add To Cart
            </button>
          )}
          {/* <button onClick={() => addToCart(product)} className=" flex  bg-white py-3 px-7 border-1 border-rosi-500   rounded-4xl gap-x-1 font-semibold text-base ">
            <AddCartIcon />
            Add To Cart
          </button> */}
          {/* <div className="flex bg-red py-3 px-7 border-1 rounded-4xl gap-x-1 w-40 justify-between items-center">
            <span className="flex justify-center items-center size-5 border-1 rounded-full border-white ">
              <IncrementIcon />
            </span>

            <span className=" text-white"> {checkProductInCart(product)} </span>
            <span className="flex justify-center items-center size-5 border-1 rounded-full border-white"> <DecrementIcon /></span>
           
          </div> */}
        </div>
      </figure>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-xs text-rosi-300 font-semibold">
          {" "}
          {product.category}{" "}
        </h3>
        <h1 className="text-sm font-semibold"> {product.name} </h1>
        <span className="text-rosi-500 font-bold">${product.price} </span>
      </div>
    </div>
  );
}
