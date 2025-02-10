import { Search } from "lucide-react";
import { Input } from "@/components/ui";
import { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils.ts";
import { useClickAway, useDebounce, useKey } from "react-use";
import { TProduct } from "./Home";
import { Link } from "react-router-dom";
import axios from "axios";

interface Props {
  className?: string;
}

async function search(query: string): Promise<TProduct[]> {
  return (
    await axios.get<TProduct[]>("https://be59c100963cd288.mokky.dev/pizzas", {
      params: { title: query },
    })
  ).data;
}

const SearchInput: FC<Props> = ({ className }) => {
  const clickRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<TProduct[]>([]);

  useClickAway(clickRef, () => {
    setFocused(false);
  });

  useKey("Escape", () => {
    setFocused(false);
    inputRef.current?.blur();
  });

  useDebounce(
    () => {
      search(`*${searchQuery.toLocaleLowerCase()}`).then((data) => {
        setProducts(data);
      });
    },
    250,
    [searchQuery]
  );

  return (
    <div className="relative flex flex-col flex-1">
      {focused && <div className="fixed inset-0 z-30 bg-black/50" />}
      <div ref={clickRef} className={cn(className, "w-full relative z-30")}>
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2"
          size={16}
        />
        <Input
          ref={inputRef}
          name="search"
          className="pl-8"
          type="text"
          placeholder="Поиск пиццы..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          autoComplete="false"
        />
      </div>

      {!!products.length && (
        <div
          className={cn(
            "rounded-md min-h-14 absolute bg-white top-14 left-0 right-0 z-30 invisible opacity-0 transition-all duration-200 py-2.5",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products.slice(0, 5).map((item) => (
            <Link
              to={`/product/${item.id}`}
              className="hover:bg-primary/10 transition-colors duration-300 py-2.5 px-5 flex gap-x-3.5 items-center focus-visible:outline-none focus-visible:ring-1"
              key={item.id}
              onClick={() => setSearchQuery("")}
            >
              <img
                className="object-cover object-center"
                src={item.imageUrl}
                alt={item.title}
                width={30}
                height={30}
                loading="lazy"
              />
              <p className="text-base font-bold">{item.title}</p>
              <p className="text-muted-foreground text-sm">
                {item.variants[0].price}₽
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
