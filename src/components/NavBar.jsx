import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect((() => {
        const handleScroll =  () =>{
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
            }
            window.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => {
                window.removeEventListener('scroll', handleScroll);
        }
    }), [])
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className="logo text-xl font-bold">
                    <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent font-bold text-2xl">
                        Sen.Dev
                    </span>
            </a>

            <nav className="desktop">
                <ul className="">
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                               <span>{name}</span> 
                               <span className='underline'></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
                
            {/* <a href="#contact" className="group flex">
                <div className="">
                    <span className="">Contact me</span>
                </div>
            </a> */}
            <a href="#contact" className="group flex">
                <div className="px-5 py-2 rounded-lg bg-white text-black transition-colors duration-300 group-hover:bg-black-50">
                    <span className="transition-colors duration-300 group-hover:text-white">
                    Contact Me
                    </span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar