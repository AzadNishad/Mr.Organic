import React from 'react'
import Logo from '../assets/Logo-big.png';
import { FaCartShopping , FaUser } from "react-icons/fa6";

export default function NavBar() {
    return (
        <div>
            <nav className='w-full h-[100px] flex justify-between items-center bg-[#e8fde5] text-[#333333] text-[17px] tracking-wide shadow-lg'>
                <section className='flex items-center gap-5 w-1/2 '>

                    <img src={Logo} className='h-28 mt-5' alt="" />

                    <div className='flex justify-between gap-3'>
                        <a href="#demo" className='py-2 px-5 hover:text-[#4caf50]'>Everyting</a>
                        <a href="#demo" className='py-2 px-5 hover:text-[#4caf50]'>Groceries</a>
                        <a href="#demo" className='py-2 px-5 hover:text-[#4caf50]'>Juice</a>
                    </div>

                </section>
                <section className='flex items-center justify-end pr-9 gap-5 w-1/2 h-full'>
                    
                        <div className='flex justify-between gap-3'>
                            <a href="#demo" className='py-2 px-5 hover:text-[#4caf50]'>About</a>
                            <a href="#demo" className='py-2 px-5 hover:text-[#4caf50]'>Contect</a>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <button className='py-2 px-5 hover:text-[#4caf50]'><FaCartShopping /></button>
                            <button className='py-2 px-5 hover:text-[#4caf50]'><FaUser /></button>
                        </div>
                    
                </section>
            </nav>
        </div>
    )
}
