import { Box, Typography } from '@mui/material'
import { colors, fontFamily } from '../libreria/MainLibrary.tsx'

import useCallToActionSx from '../style/useCallToActionSx.ts'
import ArrowDown from '../widget/ArrowDown.tsx'
import ButtonBlue from '../widget/ButtonBlue.tsx'

export default function CallToAction() {
  const sx = useCallToActionSx()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          //background: 'red',
          px: '5vw',
          mt: '8vh',
          gap: '5vw',
          flexWrap: 'wrap'
        }}
      >
        <Box sx={sx.informationBox}>
          <Box
            component="img"
            src="/alphaproject/svg/fotoProfilo.png"
            sx={{ width: '50%', height: '50%', objectFit: 'cover' }}
          />
          <Typography
            sx={{
              color: colors.secondaryText,
              fontSize: '20px', //NO RESPONSIVE
              fontWeight: 'bold',
              fontFamily: fontFamily.mainText
            }}
          >
            MANUEL DI LEVE
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: '14px',
              lineHeight: '12px',
              fontFamily: fontFamily.mainText
            }}
          >
            Sviluppatore Frontend
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: 2,
              pt: 3,
              px: 2
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: '18px',
                lineHeight: '12px',
                fontFamily: fontFamily.mainText
              }}
            >
              +39 3279499814
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '18px',
                lineHeight: '12px',
                wordBreak: 'break-word',
                textAlign: 'center',
                fontFamily: fontFamily.mainText
              }}
            >
              manueldileveM@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box sx={sx.descriptionBox}>
          <Typography
            sx={{
              color: colors.mainBlueText,
              fontFamily: fontFamily.mainText,
              fontSize: '14px',
              pl: 2,
              pt: 2,
              lineHeight: '20px'
            }}
          >
            About Me!
          </Typography>
          <Typography
            sx={{
              color: colors.secondaryText,
              fontFamily: fontFamily.mainText,
              fontSize: '40px',
              fontWeight: 'bold',
              pl: 2,
              //pt: 2,
              lineHeight: '40px'
            }}
          >
            SVILUPPATORE WEB
            <br />
            FRONTEND
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontFamily: fontFamily.mainText,
              fontSize: '14px',
              pl: 2,
              pr: 2,
              lineHeight: '20px'
            }}
          >
            Ciao ! Sono un frontend developer con una certificazione
            professionale ottenuta tramite Coursera. Ho maturato esperienza in
            ambiente startup e lavorando a diversi progetti. Mi occupo di
            sviluppare applicazioni veloci, affidabili e scalabili utilizzando
            React e TypeScript. Mi piace lavorare su problemi complessi,
            costruire architetture pulite e rilasciare funzionalità in modo
            efficiente.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ButtonBlue
          onClick={() =>
            window.open('/alphaproject/pdf/CourseraCertificato.pdf', '_blank')
          }
        >
          CERTIFICATO
        </ButtonBlue>

        <Box sx={{ position: 'absolute', right: 40 }}>
          <ArrowDown />
        </Box>
      </Box>
    </Box>
  )
}
