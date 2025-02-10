import { cn } from "@/lib/utils";
import { TProduct } from "./Home";
import { ProductCard } from "./index";

type ProductGroupListProps = {
  products: TProduct[];
  className?: string;
};

const ProductGroupList = ({ products, className }: ProductGroupListProps) => {
  return (
    <div className={cn(className)}>
      {products.map((product) => (
        <ProductCard
          id={product.id}
          title={product.title}
          price={product.variants[0].price}
          description={product.description}
          imageUrl={product.imageUrl}
          optionalIngredients={product.optionalIngeredients}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductGroupList;
