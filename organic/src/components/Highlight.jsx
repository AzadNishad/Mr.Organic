import React from 'react'
import { FaTruck, FaAddressBook, FaMoneyBill1, FaRecycle } from "react-icons/fa6";

export default function Highlight() {
  return (
    <div className="w-full bg-[#111111] flex justify-center">
      <div className="w-[80%] h-[200px] flex items-center justify-between text-white">
        <div className='bg-[#333333] py-[35px] px-[25px] rounded'>
          <div className='flex gap-3'>
            <FaTruck className='text-[#88C34A] text-[24px]'/>
            <div className='w-52'>
              <h2 className='text-[20px] font-[700]' style={{fontFamily:'Merriweather'}}>Free Shipping</h2>
              <p className='text-base'>Above $5 Only</p>
            </div>
          </div>
        </div>
        <div className='bg-[#333333] py-[35px] px-[25px] rounded'>
        <div className='flex gap-3'>
            <FaAddressBook className='text-[#88C34A] text-[24px]'/>
            <div className='w-52'>
              <h2 className='text-[20px] font-[700]' style={{fontFamily:'Merriweather'}}>Certified Organic</h2>
              <p className='text-base'>100% Guarantee</p>
            </div>
          </div>
        </div>
        <div className='bg-[#333333] py-[35px] px-[25px] rounded'>
        <div className='flex gap-3'>
            <FaMoneyBill1 className='text-[#88C34A] text-[24px]'/>
            <div className='w-52'>
              <h2 className='text-[20px] font-[700]' style={{fontFamily:'Merriweather'}}>Huge Savings</h2>
              <p className='text-base'>At Lowest Price</p>
            </div>
          </div>
        </div>
        <div className='bg-[#333333] py-[35px] px-[25px] rounded'>
        <div className='flex gap-3'>
            <FaRecycle className='text-[#88C34A] text-[24px]'/>
            <div className='w-52'>
              <h2 className='text-[20px] font-[700]' style={{fontFamily:'Merriweather'}}>Easy Returns</h2>
              <p className='text-base'>No Questions Asked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
