import NavLinks from "./NavLinks";
import Logo from "../Logo.svg";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex flex-row justify-between w-full h-14 bg-main border-b-1">
      <div className="flex px-4 py-2">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="hidden md:flex">
        <NavLinks />
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="md:hidden flex items-center justify-center font-bold text-xl text-red p-4"
      >
        {showMenu ? <GrClose /> : <GiHamburgerMenu />}
      </button>
      {showMenu && <Drawer onClose={() => setShowMenu(false)} />}
    </header>
  );
};

export default Header;
