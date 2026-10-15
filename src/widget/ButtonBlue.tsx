import { Button, ButtonProps, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { fontFamily, themeColors } from '../libreria/MainLibrary.tsx'

interface ButtonBlueProps extends ButtonProps {
  children: string
  onClick?: () => void
  to?: string
  backgroundColor: string
  hoverColor: string
  textColor: string
  border?: boolean
  widthXs: string
}

export default function ButtonBlue({
  children,
  onClick,
  to,
  sx,
  backgroundColor,
  hoverColor,
  textColor,
  border,
  widthXs,
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
      disableRipple
      onClick={handleClick}
      {...props}
      sx={{
        width: {
          xs: widthXs,
          sm: '200px'
        },
        height: '42px',
        background: backgroundColor,
        border: border ? `2px solid ${themeColors.border}` : 0,
        borderRadius: '20px',
        fontFamily: fontFamily.mainText,
        fontWeight: 'bold',
        textTransform: 'none',

        '&:hover': {
          backgroundColor: hoverColor,
          boxShadow: 'none'
        },
        ...sx
      }}
    >
      <Typography
        sx={{
          color: textColor,
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
