import { User, ShoppingCart, Search } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Input, Button } from "@/components/ui/index";

function Header() {
  return (
    <>
      <div className="container mx-auto flex gap-5 items-center py-10">
        <img src={logo} alt="Logo" width={35} height={35} loading="lazy" />
        <div className="flex flex-col">
          <span className="font-BungeeRegular text-xl leading-none">
            React Pizza
          </span>
          <span className="text-sm">вкусней уже некуда</span>
        </div>

        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2"
            size={16}
          />
          <Input className="pl-8" type="text" placeholder="Поиск пиццы..." />
        </div>

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
