import { Button, ButtonProps, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { colors, fontFamily } from '../libreria/MainLibrary.tsx'

interface ButtonBlueProps extends ButtonProps {
  children: string
  onClick?: () => void
  to?: string
}

export default function ButtonBlue({
  children,
  onClick,
  to,
  sx,
  ...props
}: ButtonBlueProps) {
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
      {...props}
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
        },
        ...sx
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
