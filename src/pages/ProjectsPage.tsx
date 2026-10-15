import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import {
  fontFamily,
  sottotitolo,
  themeColors
} from '../libreria/MainLibrary.tsx'

import useProjectsPageSx from '../style/useProjectsPageSx.ts'
import ButtonBlue from '../widget/ButtonBlue.tsx'
import IconaHome from '../widget/IconaHome.tsx'
import ProjectCard from '../widget/ProjectCard.tsx'
import ThemeToggle from '../widget/ThemeToggle.tsx'

export default function ProjectsPage() {
  const sx = useProjectsPageSx()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const components = [
    {
      name: 'RedButton',
      src: '/alphaproject/svg/ButtonRedImg.png',
      title: 'Pulsante rosso',
      description:
        'Componente personalizzato realizzato su richiesta, utilizzando uno stile particolare tramite gradient.'
    },
    {
      name: 'YellowButton',
      src: '/alphaproject/svg/ButtonYellowImg.png',
      title: 'Pulsante giallo',
      description: 'Componente personalizzato con uno stile dedicato.'
    },
    {
      name: 'TaskGNC',
      src: '/alphaproject/svg/TaskGNC.png',
      title: 'Task GNC',
      description: 'Componente sviluppato per un progetto specifico.'
    },
    {
      name: 'GlassComponent',
      src: '/alphaproject/svg/GlassComponent.png',
      title: 'Pink Glass Popup',
      description:
        'Componente interattivo con effetto glassmorphism, attivato al clic su una pill.'
    },
    {
      name: 'NomeImpresa',
      src: '/alphaproject/svg/NomeImpresa.png',
      title: 'Dettagli Azienda',
      description:
        'Componente dedicato alla visualizzazione dei dati e delle informazioni aziendali.'
    }
  ]

  const webSites = [
    {
      name: 'Green Website',
      src: '/alphaproject/svg/GreenWebsite.png',
      title: 'Green Website',
      description:
        "Sito web con un'interfaccia dedicata e un design personalizzato"
    },
    {
      name: 'Food Website',
      src: '/alphaproject/svg/FoodWebsite.png',
      title: 'Food Website',
      description: 'Progetto web dedicato al mondo del food.'
    },
    {
      name: 'Space Website',
      src: '/alphaproject/svg/SpaceWebsite.png',
      title: 'Space Website',
      description:
        "Progetto web con un'interfaccia ispirata al tema dello spazio."
    }
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        cursor: 'default'
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '72px',
          boxSizing: 'border-box',
          zIndex: 1100,

          background: themeColors.header,
          borderBottom: `1.5px solid ${themeColors.border}`,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          pr: 2,
          pl: 2
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '30px',
              sm: '40px',
              md: '56px'
            },
            lineHeight: 1.2,
            fontWeight: 700,
            color: themeColors.primary,
            fontFamily: fontFamily.mainText
          }}
        >
          I MIEI PROGETTI
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 1, md: 6 } }}>
          {isMobile ? (
            <IconaHome />
          ) : (
            <ButtonBlue
              children="Homepage"
              backgroundColor="transparent"
              border={true}
              textColor={themeColors.text}
              hoverColor={themeColors.card}
              to="/"
              widthXs="150px"
            />
          )}
          <ThemeToggle />
        </Box>
      </Box>
      <Box sx={sx.FullPage}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            px: 2,
            mt: 5,
            boxSizing: 'border-box'
          }}
        >
          <Typography sx={sottotitolo}>
            ☉ Componenti creati su richiesta
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))'
            },
            gap: 3,
            width: '100%',
            maxWidth: '1200px',
            px: 2,
            boxSizing: 'border-box',
            justifyItems: 'center'
          }}
        >
          {components.map((componente) => (
            <ProjectCard
              key={componente.name}
              image={componente.src}
              title={componente.title}
              description={componente.description}
            />
          ))}
        </Box>

        {/* SEZIONE WEBSITES */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            px: 2,
            mt: 3,
            boxSizing: 'border-box'
          }}
        >
          <Typography sx={sottotitolo}>
            ☉ Websites creati su richiesta
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))'
            },
            gap: 3,
            width: '100%',
            maxWidth: '1200px',
            px: 2,
            boxSizing: 'border-box',
            justifyItems: 'center',
            pb: 5
          }}
        >
          {webSites.map((sites) => (
            <ProjectCard
              key={sites.name}
              image={sites.src}
              title={sites.title}
              description={sites.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
