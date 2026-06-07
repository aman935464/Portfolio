import React from "react";
import {scrollTo} from "../Pages/Scroll.jsx"
export default function Navbar() {
  
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="hidden md:flex items-center gap-8 text-blue-100 font-bold">
      {navItems?.map((item) => (
        <button
          key={item?.id}
          onClick={() => scrollTo(item?.id)}
          className=" relative cursor-pointer transition-all duration-300
  hover:text-cyan-400
  hover:scale-105
  after:content-['']
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-cyan-400
  after:transition-all
  after:duration-300
  hover:after:w-full
"
        >
          {item?.name}
        </button>
      ))}
    </div>
  );
}
