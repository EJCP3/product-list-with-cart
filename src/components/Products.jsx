import Product from "./Product";
import { products as initialProducts } from "../mocks/data.json";

export default function Products() {
  console.log(initialProducts);

  return (
    <section className="w-full ">
      <h1 className="mt-10 text-center lg:ml-85  font-bold my-2 text-4xl  ">Desserts</h1>
      <div className="w-[80%] md:w-[800px] grid grid-cols-[repeat(1,minmax(200px,1fr))] sm:grid-cols-2  gap-x-10  gap-y-10 md:grid-cols-3 mx-auto mt-20">
        {initialProducts.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </section>
  );
}
