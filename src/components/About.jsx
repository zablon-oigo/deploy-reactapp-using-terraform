import React from 'react'
import { about } from '../data'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
export default function About() {
  const{title,subtitle1,subtitle2,icon,link}=about;
  return (
    <section className="bg-pink-200 py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px] ">
      <div className='container mx-auto'>
      <div className="justify-start secton-title-group">
        <img src={icon} alt="" className="" />
        <h2 className="h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      <p className="md:text-body-md">
        {subtitle1}
      </p>
      <p className="">
        {subtitle2}
      </p>
    </div>
    </section>
  )
}
