import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants/index.js'
import TechLogos from '../components/models/TechLogos.jsx'

const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title={"Preferred Tech Stack"} sub={"Skills & Technologies"} />

            <div className="tech-grid">
                {techStackImgs.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        {/* <div className="tech-card-animated-bg"/> */}
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <img src={icon.imgPath} alt={icon.name} className="tech-icon" />
                            </div>
                            <div className="padding-x w-full">
                                <p className="">{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack