import { Heading } from "@/components/index";
import { Button } from "@/components/ui/index";
import { Blocks, Plus, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  description: string;
  optionalIngredients?: string[];
  imageUrl: string;
};

const ProductCard = ({
  id,
  title,
  price,
  description,
  optionalIngredients,
  imageUrl,
}: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <article className="flex flex-col">
        <main className="flex flex-col gap-2 flex-1">
          <div className="bg-secondary rounded-xl flex justify-center py-6 text-primary relative mb-2 group">
            {optionalIngredients && (
              <SlidersHorizontal size={18} className="absolute right-6 top-6" />
            )}
            <img
              className="object-cover object-center w-3/4 h-full transition-transform duration-300 group-hover:translate-y-2"
              src={imageUrl}
              alt={title}
              width={212}
              height={212}
              loading={"lazy"}
            />
          </div>
          <Heading size={"sm"} text={title} className="font-bold" />
          <div className="text-sm text-muted-foreground font-light mb-4">
            <p className="line-clamp-5">{description}</p>
          </div>
        </main>
        <footer className="flex justify-between items-center mt-auto">
          <div className="font-light text-xl">от {price} ₽</div>
          {optionalIngredients ? (
            <Button variant="secondary">
              <Blocks size={14} />
              Собрать
            </Button>
          ) : (
            <Button variant="secondary">
              <Plus size={14} />
              Добавить
            </Button>
          )}
        </footer>
      </article>
    </Link>
  );
};

export default ProductCard;
