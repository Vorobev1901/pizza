import {
  Heading,
  CheckboxFiltersGroup,
  SkeletonFilterGroup,
} from "@/components/index";
import {
  Input,
  Separator,
  RangeSlider,
  Label,
  Checkbox,
  Button,
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui";
import { useQuery } from "react-query";
import axios from "axios";

async function fetchIngredients() {
  return (await axios.get(`https://be59c100963cd288.mokky.dev/ingredients`))
    .data;
}

function Filters() {
  const { data, isLoading, isError } = useQuery(
    "ingredients",
    fetchIngredients,
    {
      keepPreviousData: true,
    }
  );

  const sizes = [
    {
      id: "1",
      name: "size",
      title: "20 см",
      value: "20",
    },
    {
      id: "2",
      name: "size",
      title: "30 см",
      value: "30",
    },
    {
      id: "3",
      name: "size",
      title: "40 см",
      value: "40",
    },
  ];

  const types = [
    {
      id: "1",
      name: "type",
      title: "Традиционное",
      value: "traditional",
    },
    {
      id: "2",
      name: "type",
      title: "Тонкое",
      value: "thin",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <Heading level="2" className="mb-8">
          Фильтрация
        </Heading>

        {/* Тип теста */}
        <div className="mb-8 font-Dodo">
          <Heading level="3" className="mb-4">
            Тип теста:
          </Heading>
          <RadioGroup defaultValue={"traditional"}>
            {types.map((item, i) => (
              <div className="flex items-center space-x-2" key={i}>
                <RadioGroupItem value={item.value} id={`type-${item.id}`} />
                <Label htmlFor={`type-${item.id}`}>{item.title}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator className="mb-5" />

        {/* Размеры */}
        <div className="mb-6">
          <Heading level="3" className="mb-4">
            Размеры
          </Heading>
          <div className="flex flex-col gap-y-4 items-start">
            {sizes.map((item, i) => (
              <div className="flex items-center space-x-2" key={i}>
                <Checkbox
                  id={`${item.name}-${item.id}`}
                  value={item.value}
                  name="ingredients"
                />
                <Label
                  htmlFor={`${item.name}-${item.id}`}
                  className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-Dodo"
                >
                  {item.title}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-5" />

        {/* Фильтрация цен */}
        <div className="mb-6">
          <Heading level="3" className="mb-4">
            Цена от и до:
          </Heading>
          <div className="flex gap-4 mb-5">
            <Input type="number" placeholder="0" min={0} max={100} />
            <Input type="number" placeholder="100" min={0} max={100} />
          </div>

          <RangeSlider step={10} min={0} max={1000} defaultValue={[0, 750]} />
        </div>

        <Separator className="mb-5" />
        
        {isLoading || isError ? (
          <SkeletonFilterGroup
            title="Ингредиенты:"
            limit={4}
            className="mb-6"
          />
        ) : (
          <CheckboxFiltersGroup
            title="Ингредиенты:"
            items={data}
            limit={4}
            defaultItems={data}
            onChange={() => {}}
            defaultValue={[]}
            className="mb-6"
          />
        )}

        <Button variant="default">Применить</Button>
      </div>
    </>
  );
}

export default Filters;
