"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Logo, Bag, Search, Right } from "../../public/index";

import { navLists } from "@/utils/index";

const Navbar = () => {
  // open menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // disable scroll
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <nav className="w-full h-[44px] z-50 relative">
      <div className="flex justify-center items-center w-full max-w-[1024px] h-[48px] lg:h-[44px] mx-auto px-3 lg:px-6 relative">
        <ul className="w-full flex flex-1 justify-between items-center text-xs font-[300]">
          <Link className="h-full px-2" href={"/"}>
            <Image
              src={Logo}
              alt="Apple logo"
              className="size-[1.25rem] lg:size-4"
            />
          </Link>
          {navLists.map((nav: string, index: number) => (
            <li key={index}>
              <span className="hidden lg:flex px-2 text-[#E8E8ED]/80 hover:text-[#E8E8ED] duration-300 cursor-pointer">
                <Link href={"/"}>{nav}</Link>
              </span>
            </li>
          ))}

          <Link className="h-full px-1" href={"/"}>
            <Image src={Search} alt="Search" className="size-4" />
          </Link>
          <Link className="h-full px-1" href={"/"}>
            <Image src={Bag} alt="Bag" className="size-4" />
          </Link>

          {/* mobile menu */}
          <button
            aria-label="Menu button"
            className="lg:hidden flex z-[51] fill-[#fff]"
            onClick={toggleMenu}
          >
            <svg
              height={22}
              width={22}
              className="relative"
              viewBox="0 0 100 100"
            >
              <rect
                className={`translate-y-[33%] transition-all duration-[100ms] ease-in ${
                  isMenuOpen ? "!translate-y-[50%] invisible" : "delay-[100ms]"
                }`}
                width={78}
                height={5}
                x={10}
                rx={4}
              ></rect>
              <rect
                className={`translate-y-[67%] transition-all duration-[100ms] ease-in ${
                  isMenuOpen ? "!translate-y-[50%] invisible" : "delay-[100ms]"
                }`}
                width={78}
                height={5}
                x={10}
                rx={4}
              ></rect>

              <rect
                className={`absolute translate-y-[50%] transition-all duration-[100ms] ease-in ${
                  isMenuOpen
                    ? "rotate-45 visible delay-[100ms] origin-top"
                    : "invisible"
                }`}
                width={78}
                height={5}
                x={14}
                rx={4}
              ></rect>
              <rect
                className={`absolute translate-y-[50%] transition-all duration-[100ms] ease-in ${
                  isMenuOpen
                    ? "-rotate-45 visible delay-[100ms] origin-top"
                    : "invisible"
                }`}
                width={78}
                height={5}
                x={10}
                rx={4}
              ></rect>
            </svg>
          </button>

          <div
            className={`absolute inset-0 max-w-[100dvw] h-[100dvh] bg-[#161616] transition-all duration-[700ms] ${
              isMenuOpen
                ? "visible opacity-100"
                : "invisible h-[30dvh] opacity-0"
            }`}
          >
            <ul className="pt-[50px] text-2xl text-[1.75rem] font-[600]">
              {navLists.map((nav: string, index: number) => (
                <li
                  className="flex justify-between py-[0.375rem] px-12 pr-6 cursor-pointer group text-[#E8E8ED]"
                  key={index}
                >
                  <span
                    className={`flex flex-col w-fit ${
                      isMenuOpen
                        ? "translate-y-[10px] duration-500 opacity-100"
                        : "translate-y-0 duration-500 opacity-0"
                    }`}
                  >
                    <Link href={"/"}>{nav}</Link>
                  </span>
                  <Image
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 size-4 duration-300"
                    src={Right}
                    alt="Right flash"
                  />
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
