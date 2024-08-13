import React from 'react'
import {join} from '../data'
export default function Join() {
  const {image,title,subtitle,btnText}=join;
  return (
    <div className=''>
        <div className="container mx-auto">
            <div className="flex flex-col -space-y-24 md:flex-row md:items-center md:-space-x-12 lg:-space-y-0">
                <div className="">
                    <div className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full">
                        <img src={image} alt="" className="" />
                    </div>
                    <div className="max-w-[350px]">
                        <h2 className="h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 text-white">
                            Wanna join
                            <span className="text-primary-200">
                                &
                            </span>
                            have fun ?
                        </h2>
                        <p className="mb-4  max-w-[348px] md:max-w-[470px] lg:max-w-[492px] text-white lg:mb-6 text-body-sm md:text-body-md">
                            {subtitle}
                        </p>
                        <button className='btn btn-secondary btn-lg'>
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
