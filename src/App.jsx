import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import PublicationsSection from './components/sections/PublicationsSection'
import AchievementsSection from './components/sections/AchievementsSection'
import ResumeSection from './components/sections/ResumeSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PublicationsSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

