import React from 'react'
import { community } from '../data'
import CommunitySlider from './CommunitySlider'
export default function Community() {
  const{icon,title,testimonials}=community;
  return (
    <section className="relative section">
      <div className="container mx-auto">
          <div className="">
            <div className="section-title-group  max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto">
              <img src={icon} alt="" className="" />
              <h2 className="h2 section-title">
                {title}
                <span className="text-primary-200">
                  .
                </span>
              </h2>
            </div>
            <div className="absolute -right-[375px] w-[1140px] lg:-right-[280px] top-48 lg:top-0">
              <CommunitySlider testimonials={testimonials}/>
            </div>
          </div>
      </div>
               
    </section>
  )
}
