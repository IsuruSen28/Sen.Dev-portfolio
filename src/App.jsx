import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCard from './sections/FeatureCard'
import XPSection from './sections/XPSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Slider from './components/Slider'

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <Slider/>
        <LogoSection />
        <FeatureCard />
        <XPSection />
        <TechStack/>
        <Contact/>
        <Footer />
    </>
  )
}

export default App