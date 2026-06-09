# Portfolio Project

A modern React portfolio built with Vite that highlights projects, experience, and skills using animated sections, 3D visuals, and a contact form.

## Key Features

- Responsive portfolio layout with sections for hero, work showcase, experience, skills, and contact
- Animated hero text and transitions using GSAP
- 3D model/scene integration with `@react-three/fiber`, `@react-three/drei`, and `three`
- Contact form powered by EmailJS for direct message sending
- Animated counters, logo showcase, and interactive slider components
- Tailwind CSS styling with utility-first layout design

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Three.js / React Three Fiber
- GSAP animations
- EmailJS browser integration
- `@tsparticles` for particle effects

## Getting Started

### Prerequisites

- Node.js
- `npm` or `pnpm`

### Install dependencies

If you use npm:

```bash
npm install
```

If you use pnpm:

```bash
pnpm install
```

### Run development server

If you use npm:

```bash
npm run dev
```

If you use pnpm:

```bash
pnpm dev
```

### Build for production

If you use npm:

```bash
npm run build
```

If you use pnpm:

```bash
pnpm build
```

### Preview production build

If you use npm:

```bash
npm run preview
```

If you use pnpm:

```bash
pnpm preview
```

## Environment Variables

This project uses EmailJS for the contact form. Create a `.env` file at the project root with the following values:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Then restart the dev server.

## Project Structure

- `src/App.jsx` – main page layout and section composition
- `src/sections/` – page sections like `Hero`, `ShowcaseSection`, `TechStack`, `XPSection`, `Contact`, and `Footer`
- `src/components/` – reusable UI components such as `NavBar`, `Button`, `Slider`, and 3D hero components
- `public/images/` – image assets used across the portfolio

## Notes

- The contact section currently uses EmailJS and requires valid service/template/public key values.
- The hero section includes an animated 3D model and GSAP-based entrance animations.

## License

This project is for portfolio/demo purposes.
