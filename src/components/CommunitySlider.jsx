import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
export default function CommunitySlider({testimonials}) {
  return (
    <Swiper slidesPerView={4} spaceBetween={32}  grabCursor={true}   centeredSlides={'auto'} modules={[

    ]}>
        {testimonials.map((testimonial,idx)=>{
            const{image,name,message}=testimonial;
            return <SwiperSlide key={idx}>
                <div className="relative">
                    <div className="">
                        <img src={image} alt="" className="" />
                    </div>
                    <div className="absolute bottom-[30px] text-white text-center">
                        <span className="mb-8 text-lg italic font-light">
                            {message}
                        </span>
                        <div className="flex items-center justify-center gap-x-[3px] ">
                            <span className="text-[30px] text-primary-200 font-bold">~</span>
                            <span className="text-[20px] font-bold">
                            {name}
                            </span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  )
}
