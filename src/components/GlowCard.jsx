import { useRef } from "react"

const GlowCard = ({card, children, index}) => {
    const cardrefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card =cardrefs.current[index];
        if (!card) return;

        //get the mouse position relative to the card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        //calculate the angle and distance from the center of the card
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360; // Normalize angle to be between 0 and 360

        card.style.setProperty("--start", angle + 60);

    }
  return (
    <div ref={(el) => (cardrefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10">
        <div className="glow"/>
        <div className="flex items-center gap-1 mb-5">
            <h1 className="text-2xl font-semibold text-slate-200">{card.glowCardTitle}</h1>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
            {card.review.map((tech, index) => (
                    <span key={index}
                    className="text-[16px] font-semibold tracking-wide px-2.5 py-1 rounded-full
                        bg-cyan-400/[0.08] text-cyan-400 border border-cyan-400/20">
                        {tech}
                    </span>
            ))}
        </div>
        {/* {children} */}
    </div>
  )
}

export default GlowCard