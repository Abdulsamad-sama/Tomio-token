import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
type Props = {};

const Header = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="flex justify-around sticky p-4 shadow-md place-items-center">
      {/* LOGO */}
      <h1 className="text-3xl font-medium">Tomio</h1>
      {/* DESKTOPNAV */}
      <nav className="hidden md:flex ">
        <ul className="flex place-items-center gap-8">
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Telegram</a>
          </li>
        </ul>
      </nav>
      {/* CONTACT ADDRESS */}
      <p className="rounded-full border-2 p-2">
        <span className="">Address:</span>
        <span className="truncate max-w-[120px] font-mono inline-block align-middle hover:block ">
          WER34DF4DT5654464545456776FGBG509
        </span>
      </p>
      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaHamburger />}
      </button>
      {/* MOBILENAV */}
      <nav
        className={`${
          isMobileMenuOpen ? "absolute" : "hidden"
        } top-20 right-2 bg-gray-400 rounded`}
      >
        <ul className="flex flex-col gap-8 ">
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Telegram</a>
          </li>
        </ul>
        <p>Address:WER34DF4DT5654464545456776FGBG509</p>
      </nav>
    </header>
  );
};

export default Header;
