import React from "react";
import NavBar from "../components/NavBar";
import { TiShoppingCart } from "react-icons/ti";
import Footer from "../components/Footer";


function Payment() {
  return (
    <div>
      <NavBar />

      <div className="md:flex-row flex-col-reverse flex mt-16 mx-16">
        <div className="basis-3/4" >
          <p className="font-semibold text-[36.63px]">Payment Method</p>
          <div className="flex mt-[19.41px] mb-[41.6px] gap-x-[29.82px] h-[33.11px] ">
            <img src="/logos_visa.png" alt="" />
            <img src="/apple-pay.png" alt="" />
            <img src="mastercard.png" alt="" />
            <img src="paypal.png" alt="" />
          </div>

          <input type="text" name="" id="" placeholder="Card Number" className="border-2 border-black p-0 w-full  md:pl-[31px]  md:pr-[386px] py-[21px] rounded-lg"/>
          <p className="pt-[27.73px]">Exp. date</p>
          <div className="flex gap-x-[20.5px]">
            <input  type="text" className="border-black border-2  w-[60px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
            <input  type="text" className="border-black border-2 w-[60px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
            <p className="font-light text-[44.37px]">/</p>
            <input  type="text" className="border-black border-2 w-[60px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
            <input  type="text" className="border-black border-2 w-[60px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
          </div>

          <input type="text" placeholder="CCV" className="border-2 border-black p-0 w-full md:pl-[31px]  md:pr-[390px] py-[21px] mt-[27.73px] rounded-lg"/>
          <div>
          <button className="mt-[27.73px] items-center rounded-lg bg-[#402D1F] p-4 text-white font-medium text-2xl w-[237.09px] h-[72.1px]">Confirm</button>
          </div>
          
        </div>

        <div className="basis-1/4 h-[px]  w-full border border-slate-300 rounded-lg px-[22px] py-[20px] ">
          <p className="font-medium text-[24px] mb-[20px]">Order summary</p>
          <div>
            <img src="/card17.png" alt="" />
          </div>
          <p className="font-medium text-[20px] mt-[20px] mb-[10px]">BROWN WOODEN TABLE WITH CHAIR</p>

          <div className="flex my-4 w-full  space-x-[13px] mb-[32px]  ">
              <p className="rounded-full w-[25px] h-[25px] bg-[#11380D]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#725E45]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#998787]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#1F0C0C]"></p>
            </div>
            <p className="font-medium text-[20px] mt-[23px] mb-[20px]">QTY: 1</p>
            <div className="">
              <div className="flex justify-between items-center mb-[15px]">
                <p className="text-black font-medium text-[17.62px]">Order</p>
                <p className="text-black font-medium text-[17.62px] ">N150,000</p>
              </div>
              <div className="flex justify-between items-center mb-[15px]">
                <p className="text-black font-medium text-[17.62px]">Tax</p>
                <p className="text-black font-medium text-[17.62px] ">N5,000</p>
              </div>
              <div className="flex justify-between items-center mb-[15px]">
                <p className="text-black font-medium text-[17.62px]">Delivery</p>
                <p className="text-black font-medium text-[17.62px] ">N2,000</p>
              </div>
              <div className="flex justify-between items-center ">
                <p className="text-[#725E45] font-medium text-[21px]">Total:</p>
                <p className="text-[#725E45] font-medium text-[21px] ">N157,000</p>
              </div>

              
            </div>
            


        </div>
        
      </div>
      <div className="mx-16">
      <p className="text-black mt-[100.41px] mb-6 font-medium text-[32px]">
          You might also like
        </p>
        <div className="grid grid-cols-4  mx-auto justify-center mb-[90px] gap-x-12 mx- ">
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

export default Payment;
