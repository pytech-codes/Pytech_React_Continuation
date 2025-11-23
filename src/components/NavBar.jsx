import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {
    useGSAP(() => {
        gsap.from('h1',{
opacity:0,
xPercent:-100,
duration:7
        })
    })
  return (
    <div className='absolute items-center text-center pytech'>
<h1 className='text-white text-9xl '>OYINDAMOLA</h1>

    </div>
  )
}

export default NavBar