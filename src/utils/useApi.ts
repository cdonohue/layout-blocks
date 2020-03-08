import { useContext } from 'react'
import LayoutContext from './LayoutContext'

export default function useApi(componentName: string) {
  const apiFromContext = useContext(LayoutContext)
  return apiFromContext[componentName]
}
