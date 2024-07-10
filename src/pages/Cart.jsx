import React from "react";
import NavBar from "../components/NavBar";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <NavBar />
      <div className="md:mt-16 mx-4 md:mx-16 ">
        {/* Large screen */}
        <div className="hidden md:flex flex-row justify-between mb-">
          <div className="basis-1/2">
            <p className="text-[36px] font-medium tracking-wide mb-[20px]">
              BROWN WOODEN TABLE <br /> WITH CHAIR
            </p>
            <p className="text-[20px]   font-light leading-[30px] tracking-wide ">
              Indulge in ultimate relaxation with our Plush <br /> Comfort
              Chair, featuring ultra-soft high- <br />
              density foam cushions, a modern yet timeless <br />
              design, premium stain-resistant fabric in <br />
              sophisticated colors, a sturdy hardwood <br />
              frame for lasting durability, and versatile use <br /> perfect for
              any living space.
            </p>
            <p className="font-semibold text-[18px] mt-[20px] mb-2">
              Materials
            </p>
            <p className="text-[20px] font-light mb-6">Suede & Bamboo</p>
            <p className="font-semibold text-[18px] mt-[20px] ">
              Colours Available
            </p>
            <div className="flex my-4 w-full  space-x-3 mb-[32px]  ">
              <p className="rounded-full w-[25px] h-[25px] bg-[#11380D]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#725E45]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#998787]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#1F0C0C]"></p>
            </div>
            <div className="  items-center space-x-10 flex ">
              <Link to="/payment">
                <button className="rounded-lg bg-[#402D1F] p-4 text-white font-medium text-2xl ">
                  Continue to checkout
                </button>
              </Link>
              <FaRegHeart className="text-[#402D1F] w-[41px] h-[41px]" />
            </div>
          </div>
          <div className=" basis-1/2">
            <div>
              <img className="w-full h-[510px]" src="/card17.png" alt="" />
            </div>
            <div className="flex  justify-between mt-10   font-semibold">
              <div className="flex bg-[#402D1F] md:w-[194px] md:h-[60.97px] justify-between rounded-lg text-center items-center ">
                <p className="bg-[#725E45] rounded-lg  w-[25%]  text-center content-center ">
                  -
                </p>
                1
                <p className="bg-[#725E45] rounded-lg  w-[25%] text-center content-center">
                  +
                </p>
              </div>
              <p className=" font-semibold">N150,000</p>
            </div>
          </div>
        </div>

        {/* small */}
        <div className="md:hidden flex-row justify-between mb-">
          <div className="">
            <div>
              <img
                className="w-full h-full md:h-[510px]"
                src="/card17.png"
                alt=""
              />
            </div>
            <div className="flex  justify-between mt-8   font-semibold">
              <div className="flex bg-[#402D1F] w-[194px] h-[60.97px] justify-between rounded-lg text-center items-center ">
                <p className="bg-[#725E45] rounded-lg w-[25%] h-[100%] text-center content-center ">
                  -
                </p>
                1
                <p className="bg-[#725E45] rounded-lg  w-[25%]  h-[100%] text-center content-center">
                  +
                </p>
              </div>
              <p className=" font-semibold">N150,000</p>
            </div>
          </div>

          <div className="basis-1/2">
            <div>
              <p className="text-[16px] font-medium tracking-wide mb-[20px]">
                BROWN WOODEN TABLE <br /> WITH CHAIR
              </p>
              <p className="text-[12px]   font-light leading-[25px]  ">
                Indulge in ultimate relaxation with our Plush Comfort
                Chair, featuring ultra-soft high- 
                density foam cushions, a modern yet timeless
                design, premium stain-resistant fabric in 
                sophisticated colors, a sturdy hardwood 
                frame for lasting durability, and versatile use perfect
                for any living space.
              </p>
              <p className="font-medium text-[18px] mt-[20px] mb-2">
                Materials
              </p>
              <p className="text-[20px] font-light mb-6">Suede & Bamboo</p>
            </div>
            <div>
              <p className="font-medium text-[18px] mt-[20px] ">
                Colours Available
              </p>
              <div className="flex my-4 w-full  space-x-3 mb-[32px]  ">
                <p className="rounded-full w-[25px] h-[25px] bg-[#11380D]"></p>
                <p className="rounded-full w-[25px] h-[25px] bg-[#725E45]"></p>
                <p className="rounded-full w-[25px] h-[25px] bg-[#998787]"></p>
                <p className="rounded-full w-[25px] h-[25px] bg-[#1F0C0C]"></p>
              </div>
            </div>
            <div className="w-full">
              <Link to="/payment" className=" bg-[#402D1F] rounded-lg gap-5 mt-10  px-8 py-3 items-center">
              <button className="text-white font-medium text-center text-2xl">Continue to checkout</button>
                
              </Link>
              <div className=" border border-[#402D1F] rounded-lg flex items-center gap-2 mt-5  px-10 py-2  ">
                <p className="text-[#402D1F] text-[12px] font-medium text-center">Add to wishlist</p>
                <FaRegHeart className="text-[#402D1F] w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-black md:mt-[100.41px] mt-10 mb-8 font-medium  text-[12px] md:text-[32px]  ml-3">
          You might also like
        </p>
        <div className="grid md:grid-cols-4 gap-4 mx-[16px] justify-center mb-[90px] gap-x-12 ">
          <div className="">
            <div>
              <img
                className="rounded-t-[20px] w-full"
                src="/card21.png"
                alt="product"
              />
            </div>
            <div className="bg-[#402D1F] w-full h-[96px] rounded-b-[20px]  flex justify-between text-white items-center px-[20px] py-[25px]">
              <div className="">
                <p className="font-medium text-[18px]">Metro Chic Chair</p>
                <p className="font-medium text-[15.32]">N200, 000</p>
              </div>
              <div>
                <TiShoppingCart className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <img
                className="rounded-t-[20px] w-full"
                src="/card19.png"
                alt="product"
              />
            </div>
            <div className="bg-[#402D1F] w-full h-[96px] rounded-b-[20px]  flex justify-between text-white items-center px-[20px] py-[25px]">
              <div className="">
                <p className="font-medium text-[18px]">Metro Chic Chair</p>
                <p className="font-medium text-[15.32]">N200, 000</p>
              </div>
              <div>
                <TiShoppingCart className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <img
                className="rounded-t-[20px] w-full"
                src="/card20.png"
                alt="product"
              />
            </div>
            <div className="bg-[#402D1F] w-full h-[96px] rounded-b-[20px]  flex justify-between text-white items-center px-[20px] py-[25px]">
              <div className="">
                <p className="font-medium text-[18px]">Metro Chic Chair</p>
                <p className="font-medium text-[15.32]">N200, 000</p>
              </div>
              <div>
                <TiShoppingCart className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <img
                className="rounded-t-[20px] w-full"
                src="/card18.png"
                alt="product"
              />
            </div>
            <div className="bg-[#402D1F] w-full h-[96px] rounded-b-[20px]  flex justify-between text-white items-center px-[20px] py-[25px]">
              <div className="">
                <p className="font-medium text-[18px]">Metro Chic Chair</p>
                <p className="font-medium text-[15.32]">N200, 000</p>
              </div>
              <div>
                <TiShoppingCart className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
