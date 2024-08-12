import React from 'react'
import {join} from '../data'
export default function Join() {
  const {image,title,subtitle,btnText}=join;
  return (
    <div className=''>
        <div className="container mx-auto">
            <div className="flex flex-col -space-y-24 md:flex-row md:items-center md:-space-x-12 lg:-space-y-0">
                <div className="">
                    <div className="">
                        <img src={image} alt="" className="" />
                    </div>
                    <div className="">
                        <h2 className="">
                            Want to join
                            <span className=""></span>
                        </h2>
                        <p className="">
                            {subtitle}
                        </p>
                        <button className=''>
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
