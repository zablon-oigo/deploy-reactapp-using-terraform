import React,{useState} from 'react'
import {FaChevronCircleUp,FaChevronCircleDown} from 'react-icons/fa'
export default function Accordion({accordion}) {
  const [isOpen,setIsOpen]=useState(false)
  const{question,anser}=accordion
    return (
    <section className="cursor-pointer">
        <div className="bg-white border rounded-sm"></div>

    </section>
  )
}
