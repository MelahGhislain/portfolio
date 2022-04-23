import React from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/solid'
import {motion} from 'framer-motion'
import { useState } from 'react'
import {images} from '../constants'

const NavBar = () => {
    const navItems = ["home", "about", "work", "skills", "testimonials", "contact"]
    const [toggle, setToggle] = useState(false);
  return (
    <nav className=' w-screen flex justify-between items-center px-2 py-1 bg-[rgba(255,255,255,0.25)] backdrop-blur-sm filter-blur-[4px] border border-[rgba(255,255,255,0.18)] fixed z-[2]'>
        <div className='px-5 py-6 font-bold text-2xl'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className='hidden md:flex flex-1 justify-center items-center '>
            {navItems.map((item)=>(
                <li key={`link-${item}`} className='flex justify-center items-center mx-4 flex-col'>
                    <div className='w-[5px] h-[5px] rounded-[50%] mb-[5px] dot'></div>
                    <a href={`#${item}`} className='uppercase text-gray-700 flex-col font-medium transition-all ease-in-out duration-300 hover:text-indigo-500'>{item}</a>
                </li>
            ))}
        </ul>
        <div>
            <MenuIcon onClick={()=>setToggle(true)} height='20px' className='cursor-pointer md:hidden relative'/>
            {toggle && (
                <motion.div
                    whileInView={{x: [300,0],}}
                    transition={{duration: 0.85, ease: 'easeOut'}}
                    className='fixed top-0 bottom-0 right-0 z-[5] p-4 w-[80%] h-screen flex justify-end items-end flex-col bg-white bg-menu-img bg-cover bg-repeat shadow-md md:hidden'
                >
                    <XIcon onClick={()=>setToggle(false)} height='20px' className='cursor-pointer'/>
                    <ul className='h-full w-full flex justify-start items-start flex-col'>
                        {navItems.map((item)=>(
                            <li key={`${item}`} className='m-4'>
                                <a href={`#${item}`} onClick={()=>setToggle(false)} className='uppercase text-gray-700 flex-col font-medium transition-all ease-in-out duration-300 hover:text-indigo-500'>{item}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default NavBar