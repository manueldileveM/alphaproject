import { Box } from '@mui/material'
import CallToAction from '../components/CallToAction.tsx'
import Certifications from '../components/Certifications.tsx'
import Experience from '../components/Experience.tsx'
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import Projects from '../components/Projects.tsx'
import Skills from '../components/Skills.tsx'
import Specials from '../components/Specials.tsx'
import { themeColors } from '../libreria/MainLibrary.tsx'

function Homepage() {
  return (
    <Box sx={{ background: themeColors.background }}>
      <Header />
      <Box sx={{ paddingTop: '72px' }}>
        <CallToAction />
      </Box>
      <Box sx={{ paddingTop: '50px' }}>
        <Specials />
      </Box>
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Footer />
    </Box>
  )
}

export default Homepage
