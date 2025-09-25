import { AddCartIcon } from "./icons";

export default function Product() {
  return (
    <div>
      <figure>
        <img src="src/assets/image-waffle-desktop.jpg" className="w-full h-50 rounded-xl" />
        <div>
          <button className=" flex bg-white py-3 px-8 border-1 border-rosi-500   rounded-4xl">
            <AddCartIcon />
            Add To Cart
          </button>
        </div>
      </figure>
      <div>
        <h3>Waffle</h3>
        <h1>Waffle with barries</h1>
        <span>$6.50</span>
      </div>
    </div>
  );
}
