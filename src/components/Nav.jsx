import React from 'react'
import { nav } from '../data'

export default function Nav() {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-8">
        {nav.map((item,idx)=>{
          return(
            <li className="" key={idx}>
              <a href={item.href} className="transition hover:text-primary-200 ">
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>

    </nav>
  )
}
