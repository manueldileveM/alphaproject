import { Box, Typography } from '@mui/material'
import { colors, fontFamily } from '../libreria/MainLibrary.tsx'

export default function Header() {
  return (
    <Box
      sx={{
        height: '100px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <Typography
        sx={{
          color: colors.mainBlueText,
          fontFamily: fontFamily.mainText,
          fontWeight: 'bold',

          fontSize: {
            xs: '18px',
            sm: '24px',
            md: '30px',
            lg: '34px'
          },

          pl: {
            xs: '5vw',
            md: '5vw'
          }
        }}
      >
        PROFESSIONAL PORTFOLIO
      </Typography>
    </Box>
  )
}
