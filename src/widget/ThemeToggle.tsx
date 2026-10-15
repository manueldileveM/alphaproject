import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { useThemeMode } from '../context/ThemeModeContext.tsx'

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode()

  const isDark = mode === 'dark'

  return (
    <Tooltip
      title={isDark ? 'Attiva modalità chiara' : 'Attiva modalità scura'}
    >
      <IconButton
        onClick={toggleTheme}
        aria-label={isDark ? 'Attiva modalità chiara' : 'Attiva modalità scura'}
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
        {isDark ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  )
}
