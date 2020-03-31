import { useContext } from 'react'
import LayoutContext from './LayoutContext'

export default function useApi(componentName: string) {
  const { api } = useContext(LayoutContext)
  return api[componentName]
}
