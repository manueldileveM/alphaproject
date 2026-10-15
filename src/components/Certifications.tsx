import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Box, Typography } from '@mui/material'

import {
  paragrafo,
  sottotitolo,
  themeColors,
  titolo
} from '../libreria/MainLibrary.tsx'

import ButtonBlue from '../widget/ButtonBlue.tsx'

export default function Certifications() {
  return (
    <Box
      id="certifications"
      sx={{
        width: '100%',
        backgroundColor: themeColors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'default',
        gap: { xs: 3, md: 4 },
        padding: {
          xs: '60px 20px',
          md: '80px 40px'
        },
        boxSizing: 'border-box'
      }}
    >
      <Typography sx={titolo}>Certifications</Typography>

      <Typography sx={sottotitolo}>Formazione e certificazioni</Typography>

      <Typography
        sx={{
          ...paragrafo,
          textAlign: 'center'
        }}
      >
        Un percorso di formazione continua per consolidare le mie competenze
        nello sviluppo frontend.
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          boxSizing: 'border-box',
          padding: {
            xs: '24px',
            sm: '28px',
            md: '36px'
          },
          backgroundColor: themeColors.card,
          border: `1px solid ${themeColors.border}`,
          borderRadius: '20px',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          alignItems: {
            xs: 'flex-start',
            sm: 'center'
          },
          gap: 3,
          transition: 'border-color 0.2s ease, background-color 0.2s ease',

          '&:hover': {
            backgroundColor: themeColors.cardHover,
            borderColor: themeColors.primary
          }
        }}
      >
        <Box
          sx={{
            width: { xs: '56px', sm: '72px' },
            height: { xs: '56px', sm: '72px' },
            flexShrink: 0,
            borderRadius: '16px',
            backgroundColor: themeColors.background,
            border: `1px solid ${themeColors.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: themeColors.primary
          }}
        >
          <WorkspacePremiumOutlinedIcon sx={{ fontSize: { xs: 32, sm: 42 } }} />
        </Box>

        <Box
          sx={{
            flex: '1 1 0',
            minWidth: 0
          }}
        >
          <Typography
            sx={{
              ...sottotitolo,
              fontSize: { xs: '20px', sm: '24px', md: '28px' },
              overflowWrap: 'anywhere',
              mb: 1
            }}
          >
            Meta Front-End Developer
          </Typography>

          <Typography
            sx={{
              ...paragrafo,
              fontWeight: 600,
              mb: 2
            }}
          >
            Professional Certificate · Meta / Coursera
          </Typography>

          <Typography sx={paragrafo}>
            Percorso formativo dedicato allo sviluppo frontend, con
            approfondimenti sulle tecnologie e sugli strumenti utilizzati per
            creare interfacce web moderne.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', sm: 'auto' },
            flexShrink: 0
          }}
        >
          <ButtonBlue
            children="Visualizza certificato ↗"
            backgroundColor="transparent"
            border={true}
            textColor={themeColors.text}
            hoverColor={themeColors.card}
            onClick={() => {
              window.open(
                `${window.location.origin}${window.location.pathname.startsWith('/alphaproject') ? '/alphaproject' : ''}/pdf/CourseraCertificato.pdf`,
                '_blank',
                'noopener,noreferrer'
              )
            }}
            widthXs="100%"
          />
        </Box>
      </Box>
    </Box>
  )
}
