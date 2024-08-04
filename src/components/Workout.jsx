import React from 'react'
import { workouts } from '../data'
export default function Workout() {
    const{title,icon}=workouts;
  return (
    <div className='bg-pink-200'>
        <div className="">
            <img src={icon} alt="" className="" />
            <h2 className="">
                {title}
            </h2>
        </div>
    </div>
  )
}
