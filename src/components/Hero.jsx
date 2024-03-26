import React from 'react'
import HeroImg from '../assets/organic-products-hero.png';
import HeroLeaf from '../assets/logo-leaf-new.png';
import { FaCartShopping } from "react-icons/fa6";
// import Merriweather from '@fontsource/merriweather';


export default function Hero() {
  return (
    <div>
      <section className="md:flex justify-center gap-5 w-full relative md:h-[86vh] md:pt-[100px] box-border mb-20 ">
        <img src={HeroLeaf} alt="" className="absolute right-0 bottom-0 z-0 h-52 md:h-[300px] opacity-30 " />
        <div className="md:w-[40vw] hidden md:flex justify-center items-center z-10">
          <img src={HeroImg} alt="Hero" className="w-[550px]" />
        </div>
        <div className="md:w-[40vw] w-full flex justify-center flex-col p-5 md:p-0 z-20">
          <img src={HeroLeaf} alt="" className="mb-7 w-[80px]" />
          <h3 className="text-[18px] font-semibold tracking-wide mb-3" style={{ fontFamily: 'Merriweather' }}>Best Quality Products</h3>
          <h1 className="md:text-[50px] sm:text-[40px] text-[35px] font-bold leading-tight " style={{ fontFamily: 'Merriweather' }}>Join The Organic Movement!</h1>
          <p className="text-[16px] mt-4 text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="bg-[#6A9739] hover:bg-[#88C34A] ease text-white w-[150px] py-3 mt-5 z-20 rounded font-semibold"><FaCartShopping className="inline-block mr-2" /> SHOP NOW</button>
        </div>
      </section>
    </div>
  )
}
