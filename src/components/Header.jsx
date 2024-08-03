import React,{useState,useEffect} from 'react'
import {header} from '../data'
import Nav from './Nav';
import { RiMedal2Fill } from 'react-icons/ri';
import NavMobile from './NavMobile';
export default function Header() {
  const[isActive,setIsActive]=useState(false)
  const{logo,btnLoginText,btnSignupText}=header;
  return (
    <>
    <header className={`${isActive?'bg-neutral-500 py-[16px]':'bg-transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0  mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
      <a href="" className="">
        <img src={logo} alt="" className="h-[30px]" />
      </a>
      <Nav/>
      <div className="hidden space-x-4 lg:flex">
        <button className="">
          {btnLoginText}
        </button>
        <button className="">
          {btnSignupText}
        </button>
      </div>
      <div className="absolute lg:hidden right-4">
        <RiMedal2Fill className='text-3xl text-primary-200'/>
      
      </div>
      <NavMobile/>
    </header>
    </>
  )
}
