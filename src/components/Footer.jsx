import React from 'react'
import {footer}  from '../data'                          
export default function Footer() {
    const{logo,copyrightText}=footer
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px] px-[20px] ">
        <div className='container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]'
        data-aos='fade-up'   data-aos-delay='200'>
        <a href="" className="">
            <img src={logo} alt="" className="" />
        </a>
        <p className="text-sm text-neutral-300">
            {copyrightText}
        </p>
    </div>
    </footer>
  )
}
