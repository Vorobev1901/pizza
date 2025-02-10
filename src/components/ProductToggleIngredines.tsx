import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FC } from "react";
import { Ingredient } from "./Filters";

type Props = {
  ingredients: Ingredient[];
  className?: string;
  defaultValue: string[];
};

export const ProductToggleIngredines: FC<Props> = ({
  ingredients,
  className,
  defaultValue
}) => {
  return (
    <ToggleGroup type={"multiple"} variant="outline" className={className} defaultValue={defaultValue}>
      {ingredients.slice(0, 4).map((ingredient, i) => (
        <ToggleGroupItem
          value={ingredient.value}
          aria-label={`Toggle ${ingredient.value}`}
          key={i}
          className="h-full"
        >
          <div className="p-3 flex flex-col items-center gap-y-1.5 h-full">
            <img
              className="w-full aspect-square object-cover object-center"
              src={ingredient.imageUrl}
              width={110}
              height={110}
              loading="lazy"
              alt={ingredient.title}
            />
            <p className="text-xs">{ingredient.title}</p>
            <p className="text-base font-semibold mt-auto">
              {ingredient.price}₽
            </p>
          </div>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
