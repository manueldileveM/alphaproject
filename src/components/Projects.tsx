import { Box, Grid, Typography } from '@mui/material'
import {
  paragrafo,
  sottotitolo,
  themeColors,
  titolo
} from '../libreria/MainLibrary.tsx'
import ButtonBlue from '../widget/ButtonBlue.tsx'

export default function Projects() {
  return (
    <Box
      id="projects"
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
      <Typography sx={titolo}>Projects</Typography>
      <Typography sx={sottotitolo}>I miei progetti</Typography>
      <Typography sx={paragrafo}>
        Alcuni dei lavori e delle esperienze pratiche che ho sviluppato.
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="stretch"
        sx={{
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              minWidth: 0,
              boxSizing: 'border-box',
              padding: {
                xs: '20px',
                sm: '28px',
                md: '32px'
              },
              minHeight: {
                xs: 'auto',
                md: '400px'
              },
              backgroundColor: themeColors.card,
              border: `1px solid ${themeColors.border}`,
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              overflowWrap: 'anywhere',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',

              '&:hover': {
                backgroundColor: themeColors.cardHover,
                borderColor: themeColors.primary
              }
            }}
          >
            <Typography sx={sottotitolo}>Portfolio personale</Typography>
            <Typography sx={paragrafo}>React · TypeScript · MUI </Typography>
            <Typography sx={{ ...paragrafo, mt: 2 }}>
              {' '}
              Portfolio personale sviluppato con React, TypeScript e MUI,
              progettato per presentare le mie competenze, esperienze e il mio
              approccio allo sviluppo frontend.{' '}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                whiteSpace: 'pre-line',
                mt: 1
              }}
            >
              <Typography sx={paragrafo}>
                {[
                  'UI moderna e responsive',
                  'Componenti riutilizzabili',
                  'Architettura ordinata',
                  'Attenzione a UX e dettagli'
                ]
                  .map((t) => `• ${t}`)
                  .join('\n')}
              </Typography>
            </Box>
            <ButtonBlue
              children="Homepage"
              backgroundColor="transparent"
              border={true}
              textColor={themeColors.text}
              hoverColor={themeColors.card}
              onClick={() => {
                document.getElementById('home')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              sx={{ mt: 'auto' }}
              widthXs="100%"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              minWidth: 0,
              boxSizing: 'border-box',
              padding: {
                xs: '20px',
                sm: '28px',
                md: '32px'
              },
              minHeight: {
                xs: 'auto',
                md: '400px'
              },
              backgroundColor: themeColors.card,
              border: `1px solid ${themeColors.border}`,
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              overflowWrap: 'anywhere',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',

              '&:hover': {
                backgroundColor: themeColors.cardHover,
                borderColor: themeColors.primary
              }
            }}
          >
            <Typography sx={sottotitolo}>Componenti UI</Typography>
            <Typography sx={{ ...paragrafo, mt: 2 }}>
              {' '}
              Raccolta di componenti UI sviluppati durante la mia esperienza in
              startup, con particolare attenzione a riutilizzabilità,
              consistenza grafica e organizzazione del codice.{' '}
            </Typography>
            <Typography sx={{ ...paragrafo, mt: 2 }}>
              Ho lavorato su elementi come card, modali, pulsanti, selettori e
              altri componenti interattivi, curando struttura, responsive
              design, coerenza visiva e manutenibilità del codice.
            </Typography>
            <Typography sx={{ ...paragrafo, mt: 2 }}>
              React · TypeScript · MUI · Recoil · Responsive UI
            </Typography>
            <ButtonBlue
              children="Progetti"
              backgroundColor="transparent"
              border={true}
              textColor={themeColors.text}
              hoverColor={themeColors.card}
              to="/progetti"
              sx={{ mt: 'auto' }}
              widthXs="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
