import React, { useRef } from 'react'
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef =  useRef(null);
    const project1Ref =  useRef(null);
    const project2Ref =  useRef(null);
    const project3Ref =  useRef(null);
    const project4Ref =  useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0,},
            { opacity: 1, duration: 1.5}
        )
    //     const section = sectionRef.current;
    //     const project1 = project1Ref.current;
    //     const project2 = project2Ref.current;
    //     const project3 = project3Ref.current;
    //     const project4 = project4Ref.current;
    // }, 
    // [sectionRef, project1Ref, project2Ref, project3Ref, project4Ref]
    }, []);   

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout justify-between items-center">
                {/* LEFT */}
                {/* <div ref={project1Ref} className="first-project-wrapper">
                    <div className="image-wrapper">
                        <img src="/public/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content">
                        <h2 className="">Complete web application for Clothing shop</h2>
                        <p className="text-white-50">A full-stack web application built with React and Node.js for managing an online clothing store.</p>
                    </div>
                </div> */}
                <div className="project-list-wrapper overflow-hidden">
                    <div ref={project2Ref} className="project">
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/public/images/project2.png" alt="Library Mgt" />
                        </div>
                    </div>
                    <div ref={project3Ref} className="project">
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/public/images/project3.png" alt="Library Mgt" />
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div ref={project2Ref} className="project">
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/public/images/project2.png" alt="Library Mgt" />
                        </div>
                    </div>
                    <div ref={project3Ref} className="project">
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/public/images/project3.png" alt="Library Mgt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection