import { Search } from "lucide-react";
import { Input } from "@/components/ui";
import {FC, useRef} from "react";
import {cn} from "@/lib/utils.ts";

interface Props {
    className?: string;
}

const SearchInput: FC<Props> = ({className}) => {
  const ref = useRef(null);

  return (
    <div
        ref={ref}
        className={cn(className, "flex-1 relative")}
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
      <Input
        name="search"
        className="pl-8"
        type="text"
        placeholder="Поиск пиццы..."
      />
    </div>
  );
}

export default SearchInput;
function useClickAway(ref: MutableRefObject<null>, arg1: () => void) {
  throw new Error("Function not implemented.");
}

