import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Tooltip } from '@mui/material'

interface MenuProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Menu({ isOpen, onToggle }: MenuProps) {
  return (
    <Tooltip title={isOpen ? 'Chiudi Menù' : 'Apri Menù'}>
      <IconButton
        onClick={onToggle}
        aria-label={isOpen ? 'Chiudi Menù' : 'Apri Menù'}
        aria-expanded={isOpen}
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
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Tooltip>
  )
}
