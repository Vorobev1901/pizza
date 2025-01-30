import { User, ShoppingCart } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Button } from "@/components/ui/index";
import { SearchPizzas } from "@/components/index";

function Header() {
  return (
    <>
      <div className="container mx-auto flex gap-5 items-center py-10">
        <img src={logo} alt="Logo" width={35} height={35} loading="lazy" />
        <div className="flex flex-col">
          <span className="text-2xl leading-none">React Pizza</span>
          <span className="text-sm">вкусней уже некуда</span>
        </div>

        <SearchPizzas />

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
