import { useContext } from 'react'
import LayoutContext from './LayoutContext'

export default function useTheme() {
  const { theme } = useContext(LayoutContext)
  return theme
}
