import { Box, Typography } from '@mui/material'
import {
  paragrafo,
  paragrafoStrong,
  sottotitolo,
  themeColors,
  titolo
} from '../libreria/MainLibrary.tsx'

export default function Specials() {
  const skills = [
    { id: 1, aggettivo: 'Pragmatico' },
    { id: 2, aggettivo: 'Preciso' },
    { id: 3, aggettivo: 'Clean Code' },
    { id: 4, aggettivo: 'User focused' },
    { id: 5, aggettivo: 'Lavoro di squadra' },
    { id: 6, aggettivo: 'Problem solving' }
  ]

  return (
    <Box
      id="specials"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: themeColors.background,
        cursor: 'default',

        mt: {
          xs: 2,
          sm: 4,
          md: 6
        },

        gap: {
          xs: 3,
          md: 5
        },

        minHeight: 'auto',

        paddingBottom: {
          xs: 4,
          md: 8
        }
      }}
    >
      {/* <ButtonBlue to="/progetti">I MIEI PROGETTI</ButtonBlue> */}
      <Typography sx={titolo}>About</Typography>
      <Typography sx={sottotitolo}>Chi sono e come lavoro</Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: {
            xs: '0 20px',
            sm: '0 32px',
            md: '0 40px'
          },
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          gap: '32px'
        }}
      >
        <Box
          sx={{
            flex: '1 1 0',
            minWidth: 0,
            padding: {
              xs: '24px',
              sm: '28px',
              md: '32px'
            },
            minHeight: {
              xs: 'auto',
              md: '300px'
            },
            backgroundColor: themeColors.card,
            border: `1px solid ${themeColors.border}`,
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            transition: 'border-color 0.2s ease, background-color 0.2s ease',

            '&:hover': {
              backgroundColor: themeColors.cardHover,
              borderColor: themeColors.primary
            }
          }}
        >
          <Typography sx={{ ...sottotitolo, marginBottom: '20px' }}>
            Chi sono
          </Typography>
          <Typography sx={paragrafo}>
            Sono un Frontend Developer con esperienza nello sviluppo di
            applicazioni web moderne. Lavoro principalmente con React,
            TypeScript e JavaScript, con particolare attenzione alla qualità del
            codice e alla realizzazione di interfacce intuitive e responsive.
            <br />
            <br />
            Mi piace trasformare problemi complessi in soluzioni semplici,
            ordinate e facili da mantenere. Nel mio lavoro unisco logica,
            attenzione ai dettagli e cura dell’interfaccia, cercando sempre un
            equilibrio tra funzionalità e design.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: '1 1 0',
            minWidth: 0,
            boxSizing: 'border-box',
            padding: {
              xs: '24px',
              sm: '28px',
              md: '32px'
            },
            minHeight: {
              xs: 'auto',
              md: '300px'
            },
            backgroundColor: themeColors.card,
            border: `1px solid ${themeColors.border}`,
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'border-color 0.2s ease, background-color 0.2s ease',

            '&:hover': {
              backgroundColor: themeColors.cardHover,
              borderColor: themeColors.primary
            }
          }}
        >
          <Typography sx={{ ...sottotitolo, marginBottom: '20px' }}>
            Il mio approccio
          </Typography>
          {skills.map((skill) => (
            <Typography
              key={skill.id}
              sx={{
                ...paragrafoStrong,
                marginBottom: '10px'
              }}
            >
              ☉ {skill.aggettivo}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
