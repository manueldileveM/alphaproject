import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { fontFamily, themeColors } from '../libreria/MainLibrary.tsx'
import ButtonBlue from '../widget/ButtonBlue.tsx'

export default function CallToAction() {
  return (
    <Grid
      id="home"
      container
      sx={{
        background: themeColors.background,
        minHeight: 'auto',
        cursor: 'default'
      }}
    >
      <Grid item xs={12} md={6} sx={{ height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            backgroundColor: themeColors.background,
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '30px',
                md: '40px'
              },
              lineHeight: 1.2,
              fontFamily: fontFamily.mainText,
              fontWeight: 'bold',
              mt: 5,
              color: themeColors.primary,
              textAlign: 'center'
            }}
          >
            FRONTEND DEVELOPER
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              gap: 0,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                lineHeight: '30px',
                fontWeight: 'bold',
                color: themeColors.textSecondary
              }}
            >
              Ciao, sono Manuel.
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                lineHeight: '30px',
                fontWeight: 'bold',
                color: themeColors.textSecondary
              }}
            >
              Creo interfacce
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                lineHeight: '30px',
                fontWeight: 'bold',
                color: themeColors.primary
              }}
            >
              moderne e funzionali.
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '20px',
              lineHeight: '30px',
              fontFamily: fontFamily.mainText,
              fontWeight: 'bold',
              color: themeColors.primary,
              maxWidth: '300px',
              textAlign: 'center',
              mx: 'auto'
            }}
          >
            Sviluppatore frontend specializzato in React e TypeScript, con
            attenzione alla qualità del codice, alle interfacce responsive e
            alla creazione di componenti riutilizzabili.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: { xs: 2, md: 5 }
            }}
          >
            <ButtonBlue
              children="Progetti"
              backgroundColor={themeColors.primary}
              textColor="#FFFFFF"
              hoverColor={themeColors.accentHover}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              widthXs="170px"
            />
            <ButtonBlue
              children="Contatti"
              backgroundColor="transparent"
              border={true}
              textColor={themeColors.text}
              hoverColor={themeColors.card}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
              widthXs="170px"
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} sx={{ height: '100%' }}>
        <Box
          sx={{
            height: '100%',
            backgroundColor: themeColors.background,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: '360px',
              height: '360px',
              padding: '20px',
              borderRadius: '32px',
              border: `1px solid ${themeColors.border}`,
              backgroundColor: themeColors.card,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 10
            }}
          >
            <Box
              component="img"
              src="/alphaproject/svg/fotoProfilo.png"
              sx={{
                width: '50%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
