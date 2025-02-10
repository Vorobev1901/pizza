import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Logo: FC = () => {
  return (
    <Link to={"/"} className="flex gap-4 items-center">
      <img src={logo} alt="Logo" width={35} height={35} loading="lazy" />
      <div className="flex flex-col">
        <span className="text-2xl leading-none">React Pizza</span>
        <span className="text-sm">вкусней уже некуда</span>
      </div>
    </Link>
  );
};

export default Logo;
