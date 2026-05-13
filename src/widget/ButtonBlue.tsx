import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { colors, fontFamily } from '../libreria/MainLibrary.tsx'

interface ButtonBlueProps {
  children: string
  onClick?: () => void
  to?: string
}

export default function ButtonBlue({ children, onClick, to }: ButtonBlueProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to) {
      navigate(to)
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <Button
      onClick={handleClick}
      sx={{
        width: {
          xs: '80%',
          sm: '300px'
        },
        height: '48px',
        background: colors.buttonStyle.default,
        borderRadius: '12px',
        fontFamily: fontFamily.mainText,
        fontWeight: 'bold',
        textTransform: 'none',

        '&:hover': {
          background: colors.buttonStyle.hover
        }
      }}
    >
      <Typography
        sx={{
          color: colors.buttonStyle.text,
          fontFamily: fontFamily.mainText,
          fontWeight: 'bold',
          lineHeight: '20px'
        }}
      >
        {children}
      </Typography>
    </Button>
  )
}
