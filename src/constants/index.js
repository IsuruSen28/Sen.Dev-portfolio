const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  // { text: "Ideas", imgPath: "/images/ideas.svg" },
  // { text: "Concepts", imgPath: "/images/concepts.svg" },
  // { text: "Designs", imgPath: "/images/designs.svg" },
  // { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Satisfied Clients" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Web Developer",
    imgPath: "/images/logos/web.png",
  },
  {
    name: "IoT Developer",
    imgPath: "/images/logos/iot.png",
  },
  {
    name: "Game Developer",
    imgPath: "/images/logos/game.png",
  },
  {
    name: "Creative Designer",
    imgPath: "/images/logos/designer.png",
  },
];



const expCards = [
  {
    review: ["Next.js", "React.js", "Svelte Kit", "Tailwind CSS", "ShadCN UI", "Node.js", "PostgreSQL", "Firebase", "Prisma ORM", "AWS S3" ],
    glowCardTitle: "Technologies",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "September 2024 - March 2024",
    responsibilities: [
      "Contributed to multiple real-world full-stack web applications in an Agile-based hybrid development environment ",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: ["Troubleshooting", "Maintenance", "Network Infrastructure", "MSAN Systems", "Field Operations"],
    glowCardTitle: "Skills",
    logoPath: "/images/logo2.png",
    title: "Trainee Technician",
    date: "March 2020 - April 2021",
    responsibilities: [
      "Worked with telecommunication network infrastructure, including MSAN systems and field-level operations.",
      "Gained hands-on experience with fault detection, troubleshooting, and maintenance of telecommunication systems.",
      "Collaborated with cross-functional teams to ensure network reliability and performance.",
    ],
  },
 
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
];

const socialImgs = [
  {
    name: "git",
    imgPath: "/images/git.png",
    url:"https://github.com/IsuruSen28",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/isuru-senanayake-94ba87227/",
  },
  {
    name: "pinterest",
    imgPath: "/images/pinterest.png",
    url:"https://www.pinterest.com/IsuruSen28/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url:"https://x.com/IsuruS28",
  },
];

 const projects = {
    "Web": [
      {
        title: "E-commerce Storefront",
        description: "A full-stack web application built with React and Next.js for managing an online clothing store.",
        image: "https://raw.githubusercontent.com/IsuruSen28/Sen.Dev-portfolio/refs/heads/main/public/images/project1.png",
        tech: ["React", "Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      },
      {
        title: "Next.js Authentication Starter",
        description: "Next.js + TypeScript authentication starter implementing secure, production-ready user auth with NextAuth, Prisma, Tailwind, and email/2FA flows.",
        image: "https://raw.githubusercontent.com/IsuruSen28/Sen.Dev-portfolio/refs/heads/main/public/images/project2.png",
        tech: ["React", "Next.js", "PostgreSQL","ShadCN UI"],
      },
      {
        title: "Multi-Vendor E-commerce Platform",
        description: "A full-stack web application built with React and Next.js for managing a multi-vendor marketplace.",
        image: "https://raw.githubusercontent.com/IsuruSen28/Sen.Dev-portfolio/refs/heads/main/public/images/project4.png",
        tech: ["React", "Next.js", "PostgreSQL"],
      },
    ],
    "IoT": [
      {
        title: "Automated Home Security System",
        description: "IoT-Based Smart Home Security System using ESP8266 with motion, gas, flame, and vibration detection capabilities.",
        image: "https://raw.githubusercontent.com/IsuruSen28/Sen.Dev-portfolio/refs/heads/main/public/images/IProject1.png",
        tech: ["Arduino", "Firebase", "ESP32"],
      },
      
    ],
     "Game": [
      {
        title: "Spaceship Shooter Game",
        description: "A 2D side-scrolling shooter game built with Godot.",
        image: "https://raw.githubusercontent.com/IsuruSen28/Sen.Dev-portfolio/refs/heads/main/public/images/GProject1.png",
        tech: ["Godot", "GDScript", "Photoshop", 'Indie Game'],
      },
      {
        title: "Mini Vikings - ongoing",
        description: "A 2D pixel-art platformer game built with Godot.",
        image: "https://raw.githubusercontent.com/IsuruSen28/Sen.Dev-portfolio/refs/heads/main/public/images/GProject2.png",
        tech: ["Godot", "GDScript", "Aseprite", 'Indie Game'],
      },
    ],
  };

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks,
  projects,
};
