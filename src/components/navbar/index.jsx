import React from 'react'
import {logo, searchIcon} from "../../assets/index"
import SearchBar from '../searchbar'
import TextButton from '../textbutton'
import RoundedButton from '../roundedbutton'
import CustomDropDown from '../customDropDown'
import { IoChevronDown } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='flex gap-6 px-10 h-24 items-center text-sm'>
        <HiOutlineMenuAlt2 className='h-7 w-9 block custom-md:hidden'/>
        <ul className='flex grow list-none font-semibold items-center'>
            <img src={logo} className='w-24 h-10 pr-4 block custom-lg:hidden'/>
            <li className='hidden custom-md:flex items-center px-4'>Find designers <IoChevronDown className='ml-1'/></li>
            <li className='hidden custom-md:block hover:opacity-70 px-4'>Inspiration</li>
            <li className='hidden custom-md:block hover:opacity-70 px-4'>Jobs</li>
            <li className='hidden custom-md:block hover:opacity-70 px-4'>Go Pro</li>
        </ul>
    
        <img src={logo} className='grow-0 w-24 h-10 hidden custom-lg:block hover:opacity-70'/>
   
        <div className='grow flex justify-end'>
            <div className='flex gap-5 items-center'>
                <div className='hidden custom-lg1:block'>
                    <SearchBar />
                </div>
                <img className='block custom-lg1:hidden text-gray-500 h-4 w-4' src={searchIcon}/>
                <div className='hidden custom-md:block'> 
                    <TextButton  text={"Log in"}/>
                </div>
                <RoundedButton text={"Sign up"} width={26} weight={"bold"} padding={"4"}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar