import { Box, Typography } from '@mui/material'
import {
  paragrafo,
  sottotitolo,
  themeColors,
  titolo
} from '../libreria/MainLibrary.tsx'

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        width: '100%',
        backgroundColor: themeColors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        padding: {
          xs: '80px 20px',
          md: '100px 40px'
        },
        cursor: 'default'
      }}
    >
      <Typography sx={titolo}>Experience</Typography>
      <Typography sx={sottotitolo}>Le mie esperienze</Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          padding: {
            xs: '24px',
            md: '28px'
          },
          height: 'auto',
          minHeight: { xs: 'auto', md: '300px' },
          boxSizing: 'border-box',
          backgroundColor: themeColors.card,
          border: `1px solid ${themeColors.border}`,
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          // cursor: 'pointer',
          textAlign: 'left',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',

          '&:hover': {
            backgroundColor: themeColors.cardHover,
            borderColor: themeColors.primary
          }
        }}
      >
        <Typography sx={sottotitolo}>FRONTEND DEVELOPER</Typography>
        <Typography sx={sottotitolo}>Startup</Typography>
        <Typography sx={sottotitolo}>Giugno 2025 - Presente</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            whiteSpace: 'pre-line',
            mt: 3
          }}
        >
          <Typography sx={paragrafo}>
            {[
              ' Sviluppo di interfacce web con React ',
              ' TypeScript e componenti riutilizzabili',
              ' Responsive UI e ottimizzazione',
              ' Collaborazione con il team '
            ]
              .map((t) => `• ${t}`)
              .join('\n')}
          </Typography>
        </Box>
        <Typography sx={{ ...paragrafo, mt: 3 }}>
          React · TypeScript · MUI · Recoil{' '}
        </Typography>
      </Box>
    </Box>
  )
}
