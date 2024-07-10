import React from "react";
import NavBar from "../components/NavBar";
import { TiShoppingCart } from "react-icons/ti";
import Footer from "../components/Footer";


function Payment() {
  return (
    <div>
      <NavBar />

      <div className="md:flex-row flex-col-reverse flex mt-16 mx-16 mb-28">
        <div className="basis-3/4" >
          <p className="md:font-semibold  font-medium text-[16px] md:text-[36.63px] mt-4">PAYMENT METHOD</p>
          <div className="flex mt-[19.41px] mb-[41.6px] md:gap-x-[29.82px]  gap-x-[10px] h-[33.11px]  items-center ">
            <img src="/logos_visa.png" alt="" className="" />
            <img src="/apple-pay.png" alt="" className=""/>
            <img src="mastercard.png" alt=""className="" />
            <img src="paypal.png" alt="" className=""/>
          </div>

          <input type="text" name="" id="" placeholder="Card Number" className="border-2 border-black p-0  py-[15px]  md:pl-[31px]  md:pr-[386px] md:py-[21px] rounded-lg"/>
          <p className="pt-[27.73px]text-[10px] font-medium ">Exp. date</p>
          <div className="flex gap-x-[10px]">
            <input  type="text" className="border-black border-2  w-[55px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
            <input  type="text" className="border-black border-2 w-[55px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
            <p className="font-light text-[44.37px]">/</p>
            <input  type="text" className="border-black border-2 w-[55px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
            <input  type="text" className="border-black border-2 w-[55px]  md:w-[90.96px] md:h-[72.1px] rounded-lg "/>
          </div>

          <input type="text" placeholder="CCV" className="border-2 border-black p-0 py-[15px]  md:pl-[31px]  md:pr-[390px] md:py-[21px] mt-[27.73px] rounded-lg"/>
          <div>
          <button className=" md:mt-[27.73px] items-center rounded-lg bg-[#402D1F] p-4 text-white font-medium text-2xl  w-[237.09px]  h-[50px] mt-[70px]  mb-[15px] md:h-[72.1px]">Confirm</button>
          </div>
          
        </div>

        <div className=" md:basis-1/4 md:h-[px]  w-full border border-slate-300 rounded-lg px-[22px] py-[20px] ">
        <div> <p className="font-medium text-[24px] mb-[20px]">Order summary</p>
          <div>
            <img src="/card17.png" alt="" />
          </div>
          <p className="font-medium text-[20px] mt-[20px] mb-[10px]">BROWN WOODEN TABLE WITH CHAIR</p>

          <div className="flex my-4 w-full  space-x-[13px] mb-[32px]  ">
              <p className="rounded-full w-[25px] h-[25px] bg-[#11380D]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#725E45]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#998787]"></p>
              <p className="rounded-full w-[25px] h-[25px] bg-[#1F0C0C]"></p>
            </div></div>
         
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

     
      <Footer />
    </div>
  );
}

export default Payment;
