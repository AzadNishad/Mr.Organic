import React from 'react'
import Logo from '../assets/Logo-big.png';
import { FaCartShopping, FaUser, FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const NavAnchar = ({ naam }) => {
    return (
        <a href="#demo" className='py-2 px-5 hover:text-[#4caf50]'>{naam}</a>
    )
}

export default function NavBar() {
    return (
        <div>
            <nav className='w-screen h-[60px] lg:h-[100px] flex justify-between items-center bg-[#e8fde5] text-[#333333] lg:text-[17px] text-[20px] tracking-wide shadow-lg'>
                <section className='flex items-center gap-5 w-1/2 '>

                    <img src={Logo} className='lg:h-28 h-16 lg:mt-5' alt="" />

                    <div className='lg:flex hidden justify-between gap-3'>
                        <NavAnchar naam="Everyting" />
                        <NavAnchar naam="Groceries" />
                        <NavAnchar naam="Juice" />
                    </div>

                </section>
                <section className='lg:flex hidden items-center justify-end pr-9 gap-5 w-1/2 h-full'>

                    <div className='flex justify-between gap-3'>
                        <NavAnchar naam="About" />
                        <NavAnchar naam="Contect" />
                    </div>
                    <div className='flex justify-between gap-5'>
                        <button className='py-2 px-5 hover:text-[#4caf50]'><FaCartShopping /></button>
                        <button className='py-2 px-5 hover:text-[#4caf50]'><FaUser /></button>
                    </div>
                </section>
                <div className='lg:hidden mr-5 hover:text-[#4caf50]'>
                    <FaBarsStaggered id='hemburger' onClick={() => {
                        document.querySelector('.lg\\:hidden').classList.toggle('hidden')
                        document.querySelector('#close').classList.toggle('inline')
                    }} />
                    <IoClose id='close' className='text-3xl' onClick={() => {
                        
                    }}/>
                </div>
            </nav>
        </div>
    )
}
