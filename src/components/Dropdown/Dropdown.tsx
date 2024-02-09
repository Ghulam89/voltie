'use client'
import React, { useState,useEffect, useRef } from 'react';
import { useSlider } from '@/context/SliderContext';
import Link from 'next/link';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectItem,selectedItem } = useSlider();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: any) => {
    selectItem(item);
    // setIsOpen(false);
  };

  // Add an event listener to close the dropdown when clicking outside of it
  useEffect(() => {
    console.log('Use effect running. . .')
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative inline-block text-left"
    ref={dropdownRef}
    
    >
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex w-full justify-center gap-x-1.5 bg-black text-white flex items-center group"
          id="menu-button"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true"
        >
          Products
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
          <div className="absolute h-[2px] top-[100%] inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" ></div>

        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-[#f1f1e6] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <ul className="py-4 px-8 flex flex-col gap-y-2" role="none">
            <li className='group relative'>
              <Link
                href="/#products"
                className={`text-black block  text-sm ${selectedItem == 2 ? 'active-dropdown-item':''}`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(2)}
              >
                Level 2
              </Link>
              <div className="absolute h-[1px] top-[100%] inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" ></div>
            </li>
            <li className='group relative'>
              <Link
                href="/#products"
                className={`text-black block  text-sm ${selectedItem == 3 ? 'active-dropdown-item':''}`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(3)}
              >
               Level 2 charger
              </Link>
              <div className="absolute h-[1px] top-[100%] inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" ></div>
            </li>
            {/* <li className='group relative'>
              <Link
                href="/#products"
                className={`text-black block  text-sm ${selectedItem == 4 ? 'active-dropdown-item':''}`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(4)}
              >
                Product 3
              </Link>
              <div className="absolute h-[1px] top-[100%] inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" ></div>
            </li>
            <li className='group relative'>
              <Link
                href="/#products"
                className={`text-black block  text-sm ${selectedItem == 5 ? 'active-dropdown-item':''}`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(5)}
              >
                Product 4
              </Link>
              <div className="absolute h-[1px] top-[100%] inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" ></div>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
