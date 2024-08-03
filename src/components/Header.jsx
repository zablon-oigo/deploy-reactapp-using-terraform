import React,{useState,useEffect} from 'react'
import {header} from '../data'
import Nav from './Nav';
import { RiCloseFill, RiMedal2Fill, RiMenu4Fill } from 'react-icons/ri';
import NavMobile from './NavMobile';
export default function Header() {
  const[isActive,setIsActive]=useState(false)
  const{logo,btnLoginText,btnSignupText}=header;
  const[navMobile,setNavMobile]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>80 ? setIsActive(true):setIsActive(false);
    })
  })
  return (
    <>
    <header className={`${isActive?'bg-neutral-500 py-[16px]':'bg-transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0  mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
      <a href="" className="">
        <img src={logo} alt="" className="h-[30px]" />
      </a>
      <Nav/>
      <div className="hidden space-x-4 lg:flex">
        <button className="text-white transition btn btn-sm hover:text-primary-200">
          {btnLoginText}
        </button>
        <button className="btn btn-sm btn-primary">
          {btnSignupText}
        </button>
      </div>
      <div className="absolute lg:hidden right-4" onClick={()=>setNavMobile(!navMobile)}>
        {navMobile?( <RiCloseFill className="text-3xl cursor-pointer text-primary-200"/>):(<RiMenu4Fill className='text-3xl cursor-pointer text-primary-200'/>)}
        
      
      </div>
      <NavMobile navMobile={navMobile}/>
    </header>
    </>
  )
}
