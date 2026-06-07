import { useState } from "react";
import { Menu, X } from "lucide-react";
import {scrollTo} from "../Pages/Scroll.jsx"

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-white text-3xl"
      >
        <Menu />
      </button>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-3xl p-4"
        >
          <X />
        </button>
        <nav className="flex flex-col gap-6 p-6 text-white text-lg">
          {navItems?.map((item) => (
            <button
              key={item?.id}
              onClick={() => scrollTo(item?.id)}
              className="text-left "
            >
              {item?.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
