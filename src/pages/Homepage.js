import { Box } from '@mui/material'
import CallToAction from '../components/CallToAction.tsx'
import Header from '../components/Header.tsx'
import Specials from '../components/Specials.tsx'
import { colors } from '../libreria/MainLibrary.tsx'

function Homepage() {
  return (
    <Box sx={{ background: colors.background }}>
      <Header />
      <CallToAction />
      <Specials />
    </Box>
  )
}

export default Homepage
