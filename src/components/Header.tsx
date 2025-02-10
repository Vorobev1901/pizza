import { User, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/index";
import { Logo, SearchInput } from "@/components/index";

function Header() {
  return (
    <>
      <div className="container mx-auto flex gap-5 items-center py-10">
        <Logo />
    
        <SearchInput />

        <div className="flex gap-2">
          <Button variant="outline">
            <User /> Войти
          </Button>
          <Button variant="outline">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
