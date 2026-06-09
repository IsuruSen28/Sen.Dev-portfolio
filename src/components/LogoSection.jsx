import React from 'react'
import { logoIconsList } from '../constants'

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className="gradient-edge"/>
        <div className="gradient-edge"/>
        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
                {logoIconsList.map((logo, index) => (
                    <figure key={index} className='flex items-center justify-center'>
                        <img src={logo.imgPath} alt={`Company Logo ${index + 1}`} 
                        className='md:w-32 w-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300' />
                    </figure>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default LogoSection