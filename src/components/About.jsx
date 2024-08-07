import React from 'react'
import { about } from '../data'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
export default function About() {
  const{title,subtitle1,subtitle2,icon,link}=about;
  return (
    <section className=" py-[20px] md:py-[110px] md:px-0 px-[20px] lg:pt-[140px] lg:pb-[180px] ">
      <div className='container mx-auto'>
      <div className="justify-start secton-title-group" data-aos='fade-up' data-aos-delay='100'>
        <img src={icon} alt="" className="" />
        <h2 className="mb-2 h2 section-title">
          {title}
          <span className="text-primary-200">.</span>
        </h2>
      </div>
      <p className="mb-12 md:text-body-md"data-aos='fade-up' data-aos-delay='200'>
        {subtitle1}
      </p>
      <p className="mb-8 md:text-body-md"data-aos='fade-up' data-aos-delay='300'>
        {subtitle2}
      </p>
    </div>
    <div className="md:ml-28"data-aos='fade-up' data-aos-delay='400'>
      <a href="" className="flex items-center transition-all link gap-x-4 hover:gap-x-6 ">
        {link}
        <IoIosArrowDroprightCircle className='text-2xl'/>
      </a>
    </div>
    </section>
  )
}
