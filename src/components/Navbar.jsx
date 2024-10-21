
import navimage from "./images/TP_Mazembe_Logo.svg.png"

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import DopDown from "./DopDown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="  bg-black
 pb-8  text-white  z-40 sticky top-0 w-full   shadow-sm  ">
     
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 md:w-auto w-full flex ">
        <img src={navimage } alt="logo" className="md:cursor-pointer h-10 pr-1 ml-10 mt-2 " />
<div>
          <h1 className="text-2xl  text-yellow-600  pt-3  font-semibold md:flex hidden  ">TOUT PUISSANT MAZEMBE</h1>
</div>
          
          
          
          
        </div>
        <ul className="md:flex  justify-center hidden items-center  z-50">
          <li>
            <Link to="/" className="">
            Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
       
        </div>
        {/* Mobile nav */}
      <div className="md:hidden" >
      <DopDown/>
      </div>
        <ul
          className={`
        md:hidden   bg-white fixed w-full top-0 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="">
            Home
            </Link>
          </li>
          <NavLinks />
       
        </ul>
        
      </div>
    
   
    </nav>
  );
};

export default Navbar;