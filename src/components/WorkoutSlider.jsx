import React from 'react'
import {workouts} from '../data'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../WorkoutSlider.css'

import {} from 'swiper'
export default function WorkoutSlider() {
  const{programs}=workouts;
  return (
    <Swiper>
      {programs.map((program,idx)=>{
        const{image,name}=program
        return <SwiperSlide className='max-w-[320px]' key={idx}>
         <img src={program.image} alt="" className="" />
         <div className="">
          <div className="">
            {name}
          </div>
         </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}
