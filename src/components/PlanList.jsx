import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
export default function PlanList({plans}) {
    const[index,setIndex]=useState(0)
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
        {plans.map((plan,currentIndex)=>{
            const{name,price,list,delay}=plan
            return(
                <div onClick={()=>{setIndex(currentIndex)}} className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]" key={currentIndex}>
                  <div className={`${currentIndex===index?'bg-neutral-500 text-white':'bg-neutral-400/10 text-neutral-500'}`}>
                    <div className="">
                    {name}
                    </div>
                    <div className="">
                    <div className="">
                    <span className="">{price}</span>
                    <span className="">$</span>
                    </div>
                    <span className="">/month</span>
                    </div>
                  </div>
                  
                </div>
            )
        })}
    </section>
  )
}
