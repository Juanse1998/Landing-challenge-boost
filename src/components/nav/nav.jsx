import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-nav mt-4 flex flex-col lg:flex-row justify-between items-center relative">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="imagen-nav">
          <img className="w-36 lg:w-40" src="./logo 1.svg" alt="Logo" />
        </div>
        <div className="lg:hidden">
          <button
            className="text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      <nav className={`lg:flex ${isOpen ? "block" : "hidden"} lg:static absolute top-16 left-0 right-0 bg-white lg:bg-transparent p-4 lg:p-0 ${isOpen ? "z-10" : ""}`}>
        <ul className="nav-container flex flex-col lg:flex-row lg:space-x-6 font-semibold">
          <li className="mb-4 lg:mb-0">
            <a href="#home" className="block py-2 lg:py-0" onClick={() => setIsOpen(false)}>Inicio</a>
          </li>
          <li className="mb-4 lg:mb-0">
            <a href="#products" className="block py-2 lg:py-0" onClick={() => setIsOpen(false)}>Productos</a>
          </li>
          <li className="mb-4 lg:mb-0">
            <a href="#contact" className="block py-2 lg:py-0" onClick={() => setIsOpen(false)}>Contacto</a>
          </li>
        </ul>
      </nav>

      <div className="button-nav lg:block hidden mt-4">
        <a className="bg-red-500 text-white w-full lg:w-24 rounded-xl py-2 px-4 text-center" href="#products">Menu</a>
      </div>
    </div>
  );
}

export default Nav;