"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownButton from "../Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { whiteLogo } from "@/assets/images";
import { useSlider } from "@/context/SliderContext";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { selectItem, selectedItem } = useSlider();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = (item: any) => {
    selectItem(item);
    setIsOpen(!isOpen);
  };
  const handleNavItemClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="bg-black shadow-lg text-white flex justify-between items-center px-4 py-2 lg:px-16 z-[20] h-[40px]">
      <div className="w-[80px]">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src={whiteLogo}
            alt="logo"
            objectFit="contain"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Navbar */}
      <ul className="hidden sm:flex gap-x-4 xl:gap-x-8">
      <li
          className={`relative cursor-pointer group ${
            pathname == "/about" ? "active-navbar-item" : ""
          }`}
        >
          <Link href="/" className="relative z-10">
            Home
          </Link>
          <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
        </li>
        <li
          className={`relative cursor-pointer group ${
            pathname == "/about" ? "active-navbar-item" : ""
          }`}
        >
          <Link href="/about" className="relative z-10">
            About
          </Link>
          <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
        </li>
        <li
          className={`relative cursor-pointer group ${
            pathname == "/plans" ? "active-navbar-item" : ""
          }`}
        >
          <Link href="/plans" className="relative z-10">
            Plans
          </Link>
          <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
        </li>

        <DropdownButton />
        <li
          className={`relative cursor-pointer group ${
            pathname == "/roi" ? "active-navbar-item" : ""
          }`}
        >
          <Link href="/roi" className="relative z-10">
            ROI
          </Link>
          <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
        </li>

        <li
          className={`relative cursor-pointer group ${
            pathname == "/roi" ? "active-navbar-item" : ""
          }`}
        >
          <Link href="/ourapp" className="relative z-10">
            APP
          </Link>
          <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
        </li>
      </ul>

      {/* Mobile Navbar */}
      <div className="sm:hidden relative">
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars} // Toggle between bars and times icon
          color="white"
          onClick={toggleMenu}
          className="cursor-pointer transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "none" }} // Rotate the bars icon to create a cross
        />
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-[40px] right-0 h-screen w-[70%] bg-black opacity-90 text-white p-2 transition-transform duration-300`}
        >
          <ul className="p-2  flex flex-col gap-y-4">
            <li
              className={`relative cursor-pointer group w-max ${
                pathname == "/about" ? "active-navbar-item" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/about" className="relative z-10 text-white">
                About
              </Link>
              <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </li>

            <li
              className={`relative cursor-pointer group w-max ${
                pathname == "/plans" ? "active-navbar-item" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/plans" className="relative z-10 text-white">
                Plans
              </Link>
              <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </li>
            <li
              className={`relative cursor-pointer group w-max ${
                pathname == "/contact" ? "active-navbar-item" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/contact" className="relative z-10 text-white">
                Contact
              </Link>
              <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </li>
            <li className="group relative w-max">
              <Link
                href="/#products"
                className={`text-white  block ${
                  selectedItem == 0 ? "active-dropdown-item" : ""
                }`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(2)}
              >
                Level 2 
              </Link>
              <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </li>
            <li className="group relative w-max">
              <Link
                href="/#products"
                className={`text-white  block ${
                  selectedItem == 1 ? "active-dropdown-item" : ""
                }`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(3)}
              >
                Level 2 charger
              </Link>
              <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </li>
            {/* <li className="group relative  w-max">
              <Link
                href="/#products"
                className={`text-white block ${
                  selectedItem == 2 ? "active-dropdown-item" : ""
                }`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(4)}
              >
                Product 3
              </Link>
              <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </li> */}
            {/* <li className="group relative w-max">
              <Link
                href="/#products"
                className={`text-white  block ${
                  selectedItem == 3 ? "active-dropdown-item" : ""
                }`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(5)}
              >
                Product 4
              </Link>
              <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
