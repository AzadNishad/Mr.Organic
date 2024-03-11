import React from 'react'
import HeroImg from '../assets/organic-products-hero.png';
import HeroLeaf from '../assets/logo-leaf-new.png';
import { FaCartShopping } from "react-icons/fa6";
// import Merriweather from '@fontsource/merriweather';


export default function Hero() {
  return (
    <div>
      <section className="flex justify-center gap-5 w-full h-[86vh] pt-[100px] box-border mb-20 ">
      <img src={HeroLeaf} alt="" className="absolute right-0 bottom-0 z-0 h-[300px] opacity-30 "/>
        <div className="w-[40%] flex items-center z-10">
          <img src={HeroImg} alt="Hero" className="w-[550px]"/>
        </div>
        <div className="w-[40%] pl-12 pt-16 z-10">
          <img src={HeroLeaf} alt="" className="mb-7"/>
          <h3 className="text-[18px] font-semibold tracking-wide mb-3" style={{fontFamily:'Merriweather'}}>Best Quality Products</h3>
          <h1 className="text-[55px] font-bold leading-tight " style={{fontFamily:'Merriweather'}}>Join The Organic Movement!</h1>
          <p className="text-[16px] mt-4 text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="bg-[#6A9739] hover:bg-[#88C34A] ease text-white py-3 px-4 mt-5 rounded font-semibold"><FaCartShopping className="inline-block mr-2"/> SHOP NOW</button>
        </div>
      </section>
    </div>
  )
}
