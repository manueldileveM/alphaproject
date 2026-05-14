import { Box, Typography } from '@mui/material'
import { colors, fontFamily } from '../libreria/MainLibrary.tsx'

import ButtonBlue from '../widget/ButtonBlue.tsx'

export default function Specials() {
  const skills = [
    ' React & TypeScript',
    ' React Native',
    ' State management con Recoil',
    ' Architetture frontend scalabili',
    ' Componenti riutilizzabili',
    ' Ottimizzazione performance',
    ' Responsive UI development',
    ' Clean Code & maintainability',
    ' Struttura del codice ordinata e leggibile',
    ' Precisione e attenzione ai dettagli'
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        mt: 0,
        gap: 5,
        minHeight: '100vh'
      }}
    >
      <ButtonBlue to="/progetti">I MIEI PROGETTI</ButtonBlue>
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '80%',
            md: '60%',
            lg: '40%'
          },
          minHeight: '55vh',
          background: colors.backgroundSquare,
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          p: 2
        }}
      >
        <Typography
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: colors.secondaryText,
            fontFamily: fontFamily.mainText
          }}
        >
          LE MIE SKILLS:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          {skills.map((skill) => (
            <Typography
              key={skill}
              sx={{
                fontSize: {
                  xs: '15px',
                  md: '17px'
                },

                color: 'white',
                fontFamily: fontFamily.mainText,
                lineHeight: 1
              }}
            >
              • {skill}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
