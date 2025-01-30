import { TProduct } from "./Home";
import { ProductCard } from "./index";

type ProductGroupListProps = {
  products: TProduct[];
};

const ProductGroupList = ({ products }: ProductGroupListProps) => {
  return (
    <div className="grid grid-cols-3 gap-12">
      {products.map((product) => (
        <ProductCard
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
