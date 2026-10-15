import HomeIcon from '@mui/icons-material/Home'
import { IconButton, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function IconaHome() {
  const navigate = useNavigate()

  return (
    <Tooltip title="Torna alla home">
      <IconButton
        onClick={() => navigate('/')}
        aria-label="Torna alla home"
        sx={{
          color: 'var(--color-text)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          width: '42px',
          height: '42px',
          transition: 'all 0.2s ease',

          '&:hover': {
            backgroundColor: 'var(--color-card-hover)'
          }
        }}
      >
        <HomeIcon />
      </IconButton>
    </Tooltip>
  )
}
