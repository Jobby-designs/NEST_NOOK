import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex md:justify-between gap-4 md:px-16 pb-2 pt-[8px] h-[100px]  items-center ">
      <div className="">
        <img src="/card (1).png" alt="logo" className="w-[5rem] md:w-[123px] md:h-[57.25px] flex items-center justify-center" />
      </div>
      <div className="flex space-x-3 md:gap-x-[50px] md:items-center md:justify-center">
        <p><Link to="/" className="font-normal text-[16px] text-[#000000]">
          HOME
        </Link></p>
        <p><Link to="/" className="font-normal text-[16px] text-[#000000]">
          CONTACT US
        </Link></p>
        <p><Link to="/cart" className="font-normal text-[16px] text-[#000000]">
          CART
        </Link></p>
        <p>
        <Link to="/" className="font-normal text-[16px] text-[#FFFFFF] bg-[#402D1F] md:px-6 px-2 py-2 rounded-lg">
          SHOP
        </Link></p>
        
        
        
      </div>
    </div>
  );
}

export default NavBar;
