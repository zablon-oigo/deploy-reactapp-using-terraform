import React from 'react'
import {faq} from '../data'
import Accordion from './Accordion'
export default function Faq() {
    const{icon,title,accordions}=faq
  return (
    <section className="section pt-[100px] lg:pt-[20px]">
        <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] ">
            <div className="justify-start -space-x-4 section-title-group lg:justify-center lg:max-w-[540px] mx-auto px-4 lg:px-0">
                <img src={icon} alt="" className="lg:hidden" />
                <h2 className="h2 section-title lg:mt-[100px]">
                    {title}
                    <span className="text-primary-200">
                        .
                    </span>
                </h2>
            </div>
            <div className="">
                {accordions.map((accordion,idx)=>{
                   return(
                    <Accordion accordion={accordion}  key={idx}/>
                   )
                })}
            </div>
        </div>
    </section>
  )
}
