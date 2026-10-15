import { fontFamily, themeColors } from '../libreria/MainLibrary.tsx'
import { sx } from '../utils/mui.utils.ts'

export default function useCallToActionSx() {
  return {
    BoxProgettiButtons: sx({
      display: 'block',
      width: '100%',
      maxWidth: '488px',
      height: 'auto',
      borderRadius: '15px',
      border: `1px solid ${themeColors.border}`,
      boxSizing: 'border-box',
      transition: 'transform 0.25s ease',

      '&:hover': {
        transform: 'translateY(-4px)'
      }
    }),

    WebSites: sx({
      display: 'block',
      width: '100%',
      maxWidth: '600px',
      height: 'auto',
      objectFit: 'contain',
      borderRadius: '15px',
      border: `1px solid ${themeColors.border}`,
      boxSizing: 'border-box',
      transition: 'transform 0.25s ease',

      '&:hover': {
        transform: 'translateY(-4px)'
      }
    }),

    FullPage: sx({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 4,
      width: '100%',
      minHeight: '100vh',
      paddingBottom: 6,
      paddingTop: '70px',
      background: themeColors.background
    }),

    TextStyle: sx({
      color: themeColors.textSecondary,
      fontSize: 'clamp(16px, 2vw, 48px)',
      fontFamily: fontFamily
    })
  }
}
