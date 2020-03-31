import { createContext } from 'react'

const LayoutContext = createContext<Record<string, any>>({
  theme: {
    space: (key: number) => `${0.25 * key}rem`,
  },
})

export const LayoutProvider = LayoutContext.Provider

export default LayoutContext
