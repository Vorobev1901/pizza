import { Heading } from "@/components/index";
import { Button } from "@/components/ui/index";
import { Blocks, Plus, SlidersHorizontal } from "lucide-react";

type ProductCardProps = {
  title: string;
  price: number;
  description: string;
  optionalIngredients?: string[];
  imageUrl: string;
};

const ProductCard = ({
  title,
  price,
  description,
  optionalIngredients,
  imageUrl,
}: ProductCardProps) => {
  return (
    <article className="flex flex-col">
      <main className="flex flex-col gap-2 flex-1">
        <div className="bg-secondary rounded-xl flex justify-center py-6 text-primary relative mb-2">
          {optionalIngredients && (
            <SlidersHorizontal size={18} className="absolute right-6 top-6" />
          )}
          <img
            className="object-cover object-center w-3/4 h-full"
            src={imageUrl}
            alt={title}
            width={212}
            height={212}
            loading={"lazy"}
          />
        </div>
        <Heading level="2">{title}</Heading>
        <div className="text-base text-muted-foreground font-light mb-4">
          <p className="line-clamp-5">{description}</p>
        </div>
      </main>
      <footer className="flex justify-between items-center mt-auto">
        <div className="font-light text-xl">
          от {price} ₽
        </div>
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
  );
};

export default ProductCard;
