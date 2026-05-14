import { Box, Typography } from '@mui/material'
import { colors } from '../libreria/MainLibrary.tsx'

import useProjectsPageSx from '../style/useProjectsPageSx.ts'
import ButtonBlue from '../widget/ButtonBlue.tsx'

export default function ProjectsPage() {
  const sx = useProjectsPageSx()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box
        sx={{
          width: '97.6%',
          height: '80px',
          background: colors.backgroundSquare,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pr: 2,
          pl: 2
        }}
      >
        <Typography sx={sx.TextStyle}>I MIEI PROGETTI</Typography>
        <ButtonBlue to="/">HOMEPAGE</ButtonBlue>
      </Box>
      <Box sx={sx.FullPage}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            mt: '5vh',
            alignItems: 'center'
          }}
        >
          <Typography sx={sx.TextStyle}>
            COMPONENTI CREATI SU RICHIESTA
          </Typography>
          <Box
            component="img"
            src="/alphaproject/svg/ButtonRedImg.png"
            sx={sx.BoxProgettiButtons}
          />
          <Box
            component="img"
            src="/alphaproject/svg/ButtonYellowImg.png"
            sx={sx.BoxProgettiButtons}
          />
          <Box
            component="img"
            src="/alphaproject/svg/TaskGNC.png"
            sx={sx.BoxProgettiButtons}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            mt: '5vh',
            alignItems: 'center'
          }}
        >
          <Typography sx={sx.TextStyle}>
            WEBSITES CREATI SU RICHIESTA
          </Typography>
          <Box
            component="img"
            src="/alphaproject/svg/GreenWebsite.png"
            sx={sx.WebSites}
          />
          <Box
            component="img"
            src="/alphaproject/svg/FoodWebsite.png"
            sx={sx.WebSites}
          />
          <Box
            component="img"
            src="/alphaproject/svg/SpaceWebsite.png"
            sx={sx.WebSites}
          />
        </Box>
      </Box>
    </Box>
  )
}
