import { Box, Divider, Typography } from '@mui/material'
import { useThemeMode } from '../context/ThemeModeContext.tsx'
import { paragrafo, themeColors } from '../libreria/MainLibrary.tsx'

export default function Footer() {
  const { mode } = useThemeMode()

  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        backgroundColor: themeColors.header,
        borderTop: `1px solid ${themeColors.border}`,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        pl: 5,
        pr: 5,
        cursor: 'default'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: {
            xs: 4,
            md: 3
          }
        }}
      >
        <Box
          component="img"
          src={
            mode === 'dark'
              ? '/alphaproject/svg/logoMan.png'
              : '/alphaproject/svg/logoManLight.png'
          }
          alt="Logo Manuel Di Leve"
          sx={{
            width: {
              xs: '70px',
              md: '90px'
            },
            height: 'auto',
            objectFit: 'contain'
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            gap: 1
          }}
        >
          <Typography sx={paragrafo}>Manuel Di Leve</Typography>
          <Typography sx={paragrafo}>Frontend Developer</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 0,
            mt: 1
          }}
        >
          <Typography sx={{ ...paragrafo, textDecoration: 'underline' }}>
            CONTATTI
          </Typography>
          <Typography
            component="a"
            href="mailto:manueldileveM@gmail.com"
            sx={{
              ...paragrafo,
              textDecoration: 'none',
              '&:hover': {
                color: themeColors.primary
              }
            }}
          >
            Email: manueldileveM@gmail.com
          </Typography>
          <Typography
            component="a"
            href="https://www.linkedin.com/in/manuel-di-leve-23b816369/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ...paragrafo,
              color: themeColors.textSecondary,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: themeColors.primary
              }
            }}
          >
            LinkedIn{' '}
          </Typography>

          <Typography
            component="a"
            href="https://github.com/manueldileveM"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ...paragrafo,
              color: themeColors.textSecondary,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: themeColors.primary
              }
            }}
          >
            GitHub{' '}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          pt: 1
        }}
      >
        <Divider
          sx={{
            borderColor: themeColors.border,
            marginBottom: 3
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Typography
            sx={{
              ...paragrafo,
              fontSize: '14px',
              color: themeColors.textSecondary
            }}
          >
            © 2026 Manuel Di Leve. Tutti i diritti riservati.
          </Typography>

          <Typography
            sx={{
              ...paragrafo,
              fontSize: '14px',
              color: themeColors.textSecondary
            }}
          >
            Frontend Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
