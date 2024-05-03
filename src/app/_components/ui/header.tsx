import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";
const Header = () => {
  return (
    <div className="flex justify-between pt-6 px-5">
      <Image src="/Logo.png" alt="FSW Foods" height={30} width={100} />
      <Button
        className=" border-none bg-transparent"
        size="icon"
        variant="outline"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
