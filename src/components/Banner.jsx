import React from 'react'
import { banner } from '../data'
export default function Banner(){
    const{titlePart1,titlePart2,subtitle,textBtn}=banner;
  return (
    <>
    <section className="bg-neutral-500 h-[790px] ">
        <div className="container h-full mx-auto">
            <div className="relative flex items-center h-full -space-x-48 lg:-space-x-24">
               <div className="z-10 flex-1 pl-8 text-white lg:pl-0">
                <h1 className="mb-8 text-white h1">
                    {titlePart1} <br/>{' '}
                    <span className="text-primary-200">
                        {titlePart2}
                    </span>
                </h1>
                <p className="max-w-[415px] text-body-md lg:text-body-lg mb-8">
                    {subtitle}
                </p>
                <button className="btn btn-sm lg:btn-lg btn-secondary">
                    {textBtn}
                </button>
               </div>
               <div className="flex-1 w-full h-full bg-blue-300 bg-right bg-no-repeat bg-cover bg-banner lg:bg-center">
                <img src="" alt="" className="" />
               </div>
            </div>
        </div>
    </section>
    </>
  )
}
