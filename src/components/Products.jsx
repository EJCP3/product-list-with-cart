import Product from "./Product";
import { products as initialProducts } from "../mocks/data.json";

export default function Products() {
  console.log(initialProducts);

  return (
    <section className="flex flex-col gap-4">
      {initialProducts.slice(0,1).map((product) => (
        <Product product={product} />
      ))}
    </section>
  );
}
