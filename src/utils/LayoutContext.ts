import { createContext } from 'react'

const LayoutContext = createContext<{ [key: string]: { [key: string]: any } }>(
  {}
)

export const LayoutProvider = LayoutContext.Provider

export default LayoutContext
