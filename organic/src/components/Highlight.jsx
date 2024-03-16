import React from 'react';
import { FaTruck, FaAddressBook, FaMoneyBill, FaRecycle } from "react-icons/fa";

const Division = ({ icon, head, disc }) => {
  return (
    <div className='bg-[#333333] py-[35px] px-[25px]  rounded w-full md:w-[49%] 2xl:w-[24%]'>
      <div className='flex gap-3'>
        {icon}
        <div className=''>
          <h2 className='text-[20px] font-[700]' style={{ fontFamily: 'Merriweather' }}>{head}</h2>
          <p className='text-base'>{disc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Highlight() {
  return (
    <div className="w-full bg-[#111111] flex justify-center">
      <div className="w-[80%] py-5 flex flex-wrap gap-4 md:gap-3 items-center justify-between text-white">
        <Division
          icon={<FaTruck className='text-[#88C34A] text-[24px]' />}
          head="Free Shipping"
          disc="Above $5 Only"
        />
        <Division
          icon={<FaAddressBook className='text-[#88C34A] text-[24px]' />}
          head="Certified Organic"
          disc="100% Guarantee"
        />
        <Division
          icon={<FaMoneyBill className='text-[#88C34A] text-[24px]' />}
          head="Huge Savings"
          disc="At Lowest Price"
        />
        <Division
          icon={<FaRecycle className='text-[#88C34A] text-[24px]' />}
          head="Easy Returns"
          disc="No Questions Asked"
        />
      </div>
    </div>
  )
}
