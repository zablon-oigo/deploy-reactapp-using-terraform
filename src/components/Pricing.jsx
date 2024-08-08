import React from 'react'
import {pricing} from '../data'
import PlanList from './PlanList'
export default function Pricing() {
    const{icon,title,plans}=pricing
  return (
    <section className='section'>
        <div className="section-title-group  max-w-[540px] mx-auto px-4 lg:px-0">
            <img src={icon} alt="" className="" />
            <h2 className="h2">
                {title}
                <span className="text-primary-200">.</span>
            </h2>
        </div>
        <PlanList plans={plans} />
    </section>
  )
}
