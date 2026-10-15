import { Box, Typography } from '@mui/material'
import { fontFamily, themeColors } from '../libreria/MainLibrary.tsx'

interface ProjectCardProps {
  image: string
  title: string
  description: string
}

export default function ProjectCard({
  image,
  title,
  description
}: ProjectCardProps) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '488px',
        overflow: 'hidden',
        borderRadius: '16px',
        border: `1px solid ${themeColors.border}`,
        backgroundColor: themeColors.card,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',

        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 8px 24px ${themeColors.border}`
        }
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          objectFit: 'contain'
        }}
      />

      <Box sx={{ p: 2.5 }}>
        <Typography
          sx={{
            fontFamily: fontFamily.mainText,
            fontSize: '20px',
            fontWeight: 700,
            color: themeColors.primary,
            mb: 1
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: themeColors.textSecondary
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
