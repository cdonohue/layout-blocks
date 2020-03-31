import { createContext } from 'react'
import createScale from './createScale'

const LayoutContext = createContext<Record<string, any>>({
  api: {
    box: {
      padding: 6,
      size: null,
      stretch: false,
    },
    cover: {
      height: '100vh',
    },
    stack: {
      gap: '0px',
      horizontal: false,
    },
  },
  theme: {
    space: createScale(1, 'rem', 1.5),
  },
})

export const LayoutProvider = LayoutContext.Provider

export default LayoutContext
