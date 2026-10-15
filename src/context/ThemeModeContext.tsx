import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

export type ThemeMode = 'dark' | 'light'

interface ThemeModeContextType {
  mode: ThemeMode
  toggleTheme: () => void
  setMode: (mode: ThemeMode) => void
}

interface ThemeModeProviderProps {
  children: ReactNode
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
)

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): ThemeMode {
  const savedTheme = localStorage.getItem(STORAGE_KEY)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return 'dark'
}

export function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = mode
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggleTheme = () => {
    setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        toggleTheme,
        setMode
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext)

  if (!context) {
    throw new Error(
      'useThemeMode deve essere utilizzato all’interno di ThemeModeProvider'
    )
  }

  return context
}
