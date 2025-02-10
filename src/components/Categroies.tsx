import { Button } from "@/components/ui/index";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useResize } from './hooks/use-resize';

type Category = {
  name: string,
  path: string
}

function Categroies() {

  const { isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXxl } = useResize();

  const fetchCategories: Category[] = [
    { name: "Все", path: "/" },
    { name: "Мясные", path: "meat" },
    { name: "Острые", path: "spicy" },
    { name: "Сладкие", path: "sweet" },
    { name: "Вегетарианские", path: "vegetarian" },
    { name: "С курицей", path: "chicken" },
    { name: "С ананасом", path: "pineapple" },
    { name: "С колбасами", path: "sausages" },
    { name: "С солями", path: "salts" },
  ];

  const categories: Category[] = fetchCategories.slice(0, isScreenXxl ? 8 : isScreenXl ? 7 : isScreenLg ? 4 : isScreenMd ? 3 : isScreenSm ? 2 : isScreenXs ? 1 : 0);

  const dropdownCateroies: Category[] = fetchCategories.slice(isScreenXxl ? 8 : isScreenXl ? 7 : isScreenLg ? 4 : isScreenMd ? 3 : isScreenSm ? 2 : isScreenXs ? 1 : 0);

  const { pathname } = useLocation();

  return (
    <>
      <nav className="flex items-center gap-x-1.5 bg-muted px-1.5 h-12 rounded-md w-min">
        {categories.map((category, i) => (
          <Button
            className={cn(
              pathname === category.path && "shadow-[rgba(6,_5,_50,_0.19)_0px_6px_20px] bg-white text-primary"
            )}
            variant="ghost"
            key={i}
            asChild
          >
            <Link to={category.path}>{category.name}</Link>
          </Button>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={cn(dropdownCateroies.find(item => item.path === pathname)?.path === pathname && "text-primary bg-white shadow-sm", "data-[state=open]:bg-white data-[state=open]:text-primary data-[state=open]:shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0")}
              variant="ghost"
            >
              {dropdownCateroies.find(item => item.path === pathname)?.name || 'Eще'}
              <ChevronDown size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownCateroies.map((category, i) => (
              <DropdownMenuItem key={i}>
                <Link
                  className={cn(pathname === category.path && "text-primary")}
                  to={category.path}
                >
                  {category.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
}

export default Categroies;
