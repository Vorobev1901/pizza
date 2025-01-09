import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp } from "lucide-react";
import { useState } from "react";

function Categroies() {
  const [sortBy, setSortBy] = useState<string>("popular");

  const sortProperties = [
    { name: "рейтингу DESC", value: "popular" },
    { name: "рейтингу ASC", value: "-popular" },
    { name: "цене DESC", value: "price" },
    { name: "цене ASC", value: "-price" },
    { name: "названию DESC", value: "title" },
    { name: "названию ASC", value: "-title" },
  ];

  return (
    <>
      <div className="flex items-center gap-x-2 w-min px-5 h-12 rounded-md bg-muted">
        <ArrowDownUp size={16}/>
        <span className="whitespace-nowrap text-sm">Сортировка по:</span>
        <Select onValueChange={(e) => setSortBy(e)} defaultValue={sortBy}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortProperties.map((property, i) => (
              <SelectItem value={property.value} key={i}>
                {property.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default Categroies;
