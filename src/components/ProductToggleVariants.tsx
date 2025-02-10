import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  defaultValue: string;
  variants: string[];
  className?: string;
};

export const ProductToggleVariants: FC<Props> = ({
  defaultValue,
  variants,
  className,
}) => {
  return (
    <ToggleGroup
      type="single"
      defaultValue={defaultValue}
      className={cn(className, 'bg-destructive-foreground rounded-md p-0.5 min-h-10')}
    >
      {variants.map((variant, i) => (
        <ToggleGroupItem
          value={variant}
          aria-label={`Toggle ${variant}`}
          key={i}
          className="data-[state=on]:shadow-[rgba(6,_5,_50,_0.19)_0px_6px_20px] rounded-md min-h-10"
        >
          {variant}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
