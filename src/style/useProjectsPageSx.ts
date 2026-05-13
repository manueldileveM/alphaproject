import { colors, fontFamily } from '../libreria/MainLibrary.tsx'
import { sx } from '../utils/mui.utils.ts'

export default function useCallToActionSx() {
  return {
    BoxProgettiButtons: sx({
      borderRadius: '15px',
      border: `0.5vh solid ${colors.borderProjects}`,
      minWidth: '488px',
      minHeight: '100px',
      width: '100%',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: 'auto'
    }),

    WebSites: sx({
      width: '20%',
      height: '20%',
      borderRadius: '15px',
      border: `0.5vh solid ${colors.borderProjects}`
    }),

    FullPage: sx({
      display: 'flex',
      flexDirection: 'column',
      background: colors.background,
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 2,
      width: '100%',
      minHeight: '100vh'
    }),

    TextStyle: sx({
      color: colors.secondaryText,
      fontSize: 'clamp(16px, 2vw, 48px)',
      fontFamily: fontFamily
    })
  }
}
