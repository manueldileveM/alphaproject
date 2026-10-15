import { Box, Grid, Typography } from '@mui/material'
import {
  paragrafo,
  sottotitolo,
  themeColors,
  titolo
} from '../libreria/MainLibrary.tsx'

export default function Skills() {
  const skills = [
    {
      id: 1,
      titolo: 'Frontend',
      tecnologie: ['React', 'TypeScript', 'JavaScript', 'React Native']
    },
    {
      id: 2,
      titolo: 'State Management',
      tecnologie: ['Recoil', 'Gestione dello stato', 'Architetture scalabili']
    },
    {
      id: 3,
      titolo: 'UI & Development',
      tecnologie: [
        'MUI',
        'Responsive UI',
        'Componenti riutilizzabili',
        'Performance'
      ]
    },
    {
      id: 4,
      titolo: 'Approccio',
      tecnologie: [
        'Clean Code',
        'Maintainability',
        'Problem solving',
        'Teamwork'
      ]
    }
  ]

  return (
    <Box
      id="skills"
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
      <Typography sx={titolo}>Skills</Typography>
      <Typography
        sx={{
          ...sottotitolo,
          textAlign: 'center'
        }}
      >
        Le mie competenze
      </Typography>
      <Typography
        sx={{
          ...paragrafo,
          maxWidth: '650px',
          textAlign: 'center'
        }}
      >
        Tecnologie, strumenti e principi che utilizzo per costruire interfacce
        moderne, responsive e facili da mantenere.
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          width: '100%',
          padding: 4
        }}
      >
        {skills.map((skill) => (
          <Grid key={skill.id} item xs={12} md={6}>
            <Box
              sx={{
                padding: {
                  xs: '24px',
                  md: '28px'
                },
                minHeight: {
                  xs: 'auto',
                  md: '220px'
                },
                height: {
                  xs: 'auto',
                  md: '220px'
                },
                backgroundColor: themeColors.card,
                border: `1px solid ${themeColors.border}`,
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                transition:
                  'border-color 0.2s ease, background-color 0.2s ease',

                '&:hover': {
                  backgroundColor: themeColors.cardHover,
                  borderColor: themeColors.primary
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '14px',
                    sm: '16px',
                    md: '18px'
                  },
                  fontWeight: 700,
                  color: themeColors.primary,
                  marginBottom: { xs: '5px', sm: '7px', md: '10px' }
                }}
              >
                {skill.titolo}
              </Typography>
              {skill.tecnologie.map((tech) => (
                <Typography
                  key={tech}
                  sx={{
                    fontSize: {
                      xs: '14px',
                      sm: '16px',
                      md: '18px'
                    },
                    fontWeight: 700,
                    color: themeColors.textSecondary,
                    marginBottom: { xs: '5px', sm: '7px', md: '10px' },
                    overflowWrap: 'anywhere',
                    maxWidth: '100%'
                  }}
                >
                  • {tech}
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
