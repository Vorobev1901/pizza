import { Heading } from "@/components/index";
import { Checkbox, Input, Label } from "@/components/ui/index";
import { cn } from "@/lib/utils";

type TIngredient = { id: string; name: string; value: string; title: string };

interface CheckboxFiltersGroupProps {
  title: string;
  items: TIngredient[];
  limit?: number;
  defaultItems?: Item[];
  className?: string;
  searchInputPlaceholder?: string;
  onChange?: () => void;
  defaultValue?: string[];
}

const CheckboxFiltersGroup = ({
  title,
  items,
  searchInputPlaceholder = "Поиск...",
  defaultItems,
  defaultValue,
  limit = 5,
  className,
  onChange,
}: CheckboxFiltersGroupProps) => {
  return (
    <div className={cn(className, "flex flex-col")}>
      <Heading level="3" className="mb-4">
        {title}
      </Heading>

      <div className="mb-4">
        <Input placeholder={searchInputPlaceholder} />
      </div>

      <div className="flex flex-col gap-y-4 items-start">
        {items.slice(0, limit).map((item, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <Checkbox
              id={`${item.name}-${item.id}`}
              value={item.value}
              name="ingredients"
              onChange={onChange}
            />
            <Label
              htmlFor={`${item.name}-${item.id}`}
              className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.title}
            </Label>
          </div>
        ))}
        {items.length > limit && (
          <button type="button" className="text-primary text-sm">
            + Показать всё
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckboxFiltersGroup;
