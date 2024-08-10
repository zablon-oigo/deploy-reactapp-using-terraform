import React,{useState} from 'react'
import {FaChevronCircleUp,FaChevronCircleDown} from 'react-icons/fa'
export default function Accordion({accordion}) {
  const [isOpen,setIsOpen]=useState(false)
  const{question,answer}=accordion
    return (
    <section className="cursor-pointer">
        <div className="bg-white border rounded-sm">
            <div className="min-h-[60px] flex items-center justify-between px-[30px]">
                <h6 className="h6">
                    {question}
                </h6>
                <div className="">
                    {isOpen? <FaChevronCircleUp className='text-[20px]'/>:<FaChevronCircleDown className='text-[20px]'/>}
                </div>
            </div>
        </div>

    </section>
  )
}
