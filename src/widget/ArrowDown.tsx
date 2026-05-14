import HeightIcon from '@mui/icons-material/Height'
import { Box } from '@mui/material'
import { colors } from '../libreria/MainLibrary.tsx'

export default function ArrowDown() {
  return (
    <Box
      sx={{
        border: `0.5vh solid ${colors.buttonStyle.default}`,
        borderRadius: '12px',
        background: 'none',
        height: '48px',
        width: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <HeightIcon sx={{ color: 'white' }} />
    </Box>
  )
}
