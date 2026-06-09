import { useState } from "react";
import TitleHeader from "./TitleHeader";

const Slider = () => {
  const works1 = {
    "Web": [
      {
        title: "E-commerce Storefront",
        description: "A full-stack web application built with React and Next.js for managing an online clothing store.",
        image: "/public/images/project1.png",
        tech: ["React", "Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      },
      {
        title: "Next.js Authentication Starter",
        description: "Next.js + TypeScript authentication starter implementing secure, production-ready user auth with NextAuth, Prisma, Tailwind, and email/2FA flows.",
        image: "/public/images/project2.png",
        tech: ["React", "Next.js", "PostgreSQL","ShadCN UI"],
      },
      {
        title: "Multi-Vendor E-commerce Platform",
        description: "A full-stack web application built with React and Next.js for managing a multi-vendor marketplace.",
        image: "/public/images/project1.png",
        tech: ["React", "Next.js", "PostgreSQL"],
      },
    ],
    "IoT": [
      {
        title: "Automated Home Security System",
        description: "IoT-Based Smart Home Security System using ESP8266 with motion, gas, flame, and vibration detection capabilities.",
        image: "/public/images/IProject1.png",
        tech: ["Arduino", "Firebase", "ESP32"],
      },
      
    ],
     "Game": [
      {
        title: "Spaceship Shooter Game",
        description: "A 2D side-scrolling shooter game built with Godot.",
        image: "/public/images/GProject1.png",
        tech: ["Godot", "GDScript", "Photoshop", 'Indie Game'],
      },
      {
        title: "Mini Vikings",
        description: "A 2D pixel-art platformer game built with Godot.",
        image: "/public/images/project3.png",
        tech: ["Godot", "GDScript", "Aseprite", 'Indie Game'],
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Web");

  return (
    <section id="work" className="px-6 py-20 min-h-screen">
        <div className="w-full h-full md:px-10 px-5 mb-10">
        <TitleHeader title="My Projects" sub="Things I have built 👾" />
        </div>
      <div className="max-w-6xl mx-auto">

        
        {/* Tab Nav */}
        <div className="flex border-b gap-2 border-white/10 mb-10 w-fit mx-auto">
          {Object.entries(works1).map(([category, items]) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                relative px-6 py-3 text-lg font-medium transition-colors duration-200 outline-none
                group
                ${activeCategory === category
                  ? "text-slate-100"
                  : "text-slate-400 hover:text-slate-200"
                }
              `}
            >
              {category}
              <span className={`
                ml-1.5 inline-flex items-center justify-center w-6 h-6 rounded-full text-[16px] font-bold
                transition-colors duration-200
                ${activeCategory === category
                  ? "bg-white/25 text-slate-200"
                  : "bg-white/10 text-slate-400"
                }
              `}>
                {items.length}
              </span>

              {/* Animated underline */}
              <span className={`
                absolute bottom-[-1px] left-0 h-[2px] 
                transition-all duration-300 ease-in-out
                ${activeCategory === category
                  ? "w-full bg-slate-100"
                  : "w-0 group-hover:w-full bg-slate-500"
                }
              `} />
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {works1[activeCategory].map((project, index) => (
            <div
              key={index}
              className="
                group bg-white/[0.03] border border-white/[0.07] rounded-2xl
                overflow-hidden cursor-pointer
                transition-all duration-300
                hover:-translate-y-1.5 hover:border-cyan-400/25
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(110,231,247,0.1)]
              "
            >
              {/* Image */}
              <div className="relative h-68 overflow-hidden bg-white/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c1a]/70 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-100 mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[15px] font-semibold tracking-wide px-2.5 py-1 rounded-full
                        bg-cyan-400/[0.08] text-cyan-400 border border-cyan-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Slider;
