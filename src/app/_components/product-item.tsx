import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice } from "./_helpers/pricer";
import { formatCurrency } from "./_helpers/pricer";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    // Prisma.ProductGetPayload é um tipo gerado pelo Prisma que pega o valor de tabela associada do banco de dados
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover  shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 flex items-center rounded-full bg-primary px-2 py-[2px] text-white">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>

      <h2 className="truncate text-sm">{product.name}</h2>
      <div className="flex items-center gap-4 ">
        <h3 className="font-semibold">
          {formatCurrency(calculateProductTotalPrice(product))}
        </h3>
        {product.discountPercentage > 0 && (
          <span className="text text-xs text-muted-foreground line-through">
            {formatCurrency(Number(product.price))}
          </span>
        )}
      </div>
      <span className="text-xs text-muted-foreground">
        {product.restaurant.name}
      </span>
    </div>
  );
};

export default ProductItem;
