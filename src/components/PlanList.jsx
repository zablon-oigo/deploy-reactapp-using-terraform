import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
export default function PlanList({plans}) {
    const[index,setIndex]=useState(0)
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
        {plans.map((plan,currentIndex)=>{
            const{name,price,list,delay}=plan
            return(
                <div onClick={()=>{setIndex(currentIndex)}} className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]" key={currentIndex}  data-aos='fade-up' data-aos-offset='200' data-aos-delay={delay}>
                  <div className={`${currentIndex===index?'bg-neutral-500 text-white':'bg-neutral-400/10 text-neutral-500'} flex justify-center flex-col items-center py-[40px] px-[30px]  lg:min-h-[550px] transition duration-100`}>
                    <div className="">
                    <div className={`${currentIndex === index ? 'text-neutral-500 bg-white' : 'bg-neutral-500 text-white'} h-[26px] font-primary text-sm font-semibold flex justify-center items-center`}
                  >
                    <span>
                      {name}
                    </span>
                  </div>

                    <div className="flex flex-row items-center justify-center font-extrabold text-center font-primary">
                    <div className="text-[40px] lg:text-[50px]">
                    <span className="">{price}</span>
                    <span className=""> $</span>
                    </div>
                    <span className="ml-2">/month</span>
                    </div>
                    </div>
                    <div className="">
                        <ul className="flex flex-col mb-8 gap-y-4">
                            {list.map((item,idx)=>{
                                return(
                                    <li className="flex items-center gap-x-[10px]"key={idx}>
                                    <BsCheckCircleFill className='text-lg'/>
                                    <div className="">
                                        {item.name}
                                    </div>
                                </li>
                                )

                            })}
                        </ul>
                        <button className={`${currentIndex===index?'bg-white text-neutral-500':'border border-neutral-500'} btn btn-lg  rounded-[1px] lg:mx-auto`}>
                          join now
                        </button>
                    </div>
                  </div>
                  
                </div>
            )
        })}
    </section>
  )
}
