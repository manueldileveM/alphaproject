import { colors } from '../libreria/MainLibrary.tsx'
import { sx } from '../utils/mui.utils.ts'

export default function useCallToActionSx() {
  return {
    informationBox: sx({
      flex: 1,
      flexShrink: 0,
      minHeight: '60vh',
      background: colors.backgroundSquare,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15px',
      transform: 'scale(0.7)',
      transformOrigin: 'top left',
      gap: 0.5
    }),

    descriptionBox: sx({
      flex: 3,
      minWidth: 0,
      minHeight: '30vh',
      background: colors.backgroundSquare,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      alignItems: 'flex-start', //ASSE VERTICALE
      justifyContent: 'flex-start', //ASSE ORIZZONTALE
      borderRadius: '15px'
    })
  }
}
