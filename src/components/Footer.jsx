import React from 'react'
import {footer}  from '../data'                          
export default function Footer() {
    const{logo,copyrightText}=footer
  return (
    <div className='container mx-auto'>
        <a href="" className="">
            <img src={logo} alt="" className="" />
        </a>
        <p className="">
            {copyrightText}
        </p>
    </div>
  )
}
