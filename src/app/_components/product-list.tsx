import { db } from "../_lib/prisma";
import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";

interface ProductsListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductList = async ({ products }: ProductsListProps) => {
  return (
    <div className="flex gap-4 overflow-scroll px-5  [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
