import React from 'react'
import { nav } from '../data'

export default function NavMobile({ navMobile }) {
  return (
    <nav
      className={`lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all ${navMobile ? 'min-h-screen' : 'h-0'}`}
      aria-hidden={!navMobile}
    >
      <ul className="flex flex-col items-center justify-center w-full h-full gap-y-8">
        {nav.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} className="text-white text-body-md">
              {item.name}
            </a>
          </li>
        ))}
        <div className="flex justify-center mt-8 gap-x-8">
        <button className="text-white btn btn-lg">Log in</button>
        <button className="btn btn-lg btn-primary">Sign up</button>
      </div>
      </ul>
      
    </nav>
  )
}
