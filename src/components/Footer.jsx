import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoCallOutline } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col gap-5 w-[100%] bg-[#402D1F] px-10 py-10  text-white">
      <div className="md:flex justify-between space-y-3 items-center px-10 border-b border-gray-400 py-5">
        <div>
          <img
            src="/card (15).png"
            alt=""
            className="w-[123px] h-[57.25px] mb-[18.5px]"
          />
          <p className="">Got any question send us a mail info@nest&nook.com</p>
        </div>

        <div>
          <div className="flex justify-between gap-x-8">
            <p>Home</p>
            <p>Cart</p>
          </div>
          <div className="flex justify-between gap-x-8">
            <p>Contact</p>
            <p>Shop</p>
          </div>
        </div>

        <div>
          <p className="mb-[22px]">Subscribe to our Newsletter</p>
          <div className="flex items-center mb-[20px] md:mx-[10px] mr-5 ">
            <input
              type="text"
              placeholder="Enter email to get started"
              className="md:p-4 rounded-l-lg p-[3px]"
            />
            <div className=" md:p-4 p-2 rounded-r-lg bg-pink-200 mr-11">
              <FaArrowRight
                size={15}
                md:size={25}
                className="text-black "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-10 border-b border-gray-400">
        <div className="flex text-white my-[38px] ">
          <FiYoutube className="w-[27.2px] h-[27.2]" />
          <FaInstagram className="w-[27.2px] h-[27.2]" />
          <FaXTwitter className="w-[27.2px] h-[27.2]" />
          <LuFacebook className="w-[27.2px] h-[27.2]" />
        </div>
        <p className="my-[21px]">Back to top</p>
      </div>
      <div className="flex items-center justify-between px-10">
        <p>©2022 Nest & Nook Company S.L. ALL RIGHTS RESERVED.</p>
        <p>Terms & Privacy Policies</p>
      </div>
    </div>
  );
}

export default Footer;
