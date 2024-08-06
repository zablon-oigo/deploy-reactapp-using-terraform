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
        return <SwiperSlide>
          slide
        </SwiperSlide>
      })}
    </Swiper>
  )
}
