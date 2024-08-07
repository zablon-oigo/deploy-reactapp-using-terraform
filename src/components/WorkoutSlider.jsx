import React from 'react'
import {workouts} from '../data'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../workoutSlider.css'

import {} from 'swiper'
import { Navigation } from 'swiper/modules'
export default function WorkoutSlider() {
  const{programs}=workouts;
  return (
    <Swiper slidesPerView={2} spaceBetween={32} navigation={true}  breakpoints={{
      768:{
        slidesPerView:3,
      },
      1024:{
        slidesPerView:4,
      },
    }}
    modules={[Navigation]}
    className='workoutSlider'
    >
      {programs.map((program,idx)=>{
        const{image,name}=program
        return <SwiperSlide className='max-w-[320px] max-h-[320px] relative' key={idx}>
         <img src={image} alt="" className="object-cover w-full h-full" />
         <div className="absolute left-[20px] bottom-[20px]  bg-white h-[26px] px[14px] flex items-center rounded-[1px]">
          <div className="text-sm font-semibold font-primary text-neutral-500">
            {name}
          </div>
         </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}
