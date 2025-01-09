import React from "react";
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
    <article className="flex flex-col gap-4">
      <div className="bg-secondary rounded-xl px-9 py-6 text-primary relative">
        {optionalIngredients && (
          <SlidersHorizontal size={18} className="absolute right-6 top-6" />
        )}
        <img
          className="object-cover object-center w-full h-full"
          src={imageUrl}
          alt={title}
          width={212}
          height={212}
          loading={"lazy"}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Heading level="2">{title}</Heading>
        <div className="text-base text-muted-foreground font-light mb-1">
          <p>{description}</p>
        </div>
        <div className="flex justify-between">
          <div className="font-light text-xl">
            от
            <span className="font-bold"> {price} ₽</span>
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
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
