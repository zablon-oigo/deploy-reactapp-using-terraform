import React from 'react'
import { workouts } from '../data'
export default function Workout() {
    const{title,icon}=workouts;
  return (
    <div className='section'>
        <div className="section-title-group max-w-[540px] mx-auto   px-4 lg:px-0">
            <img src={icon} alt="" className="" />
            <h2 className="h2 section-title">
                {title}
            </h2>
        </div>
    </div>
  )
}
