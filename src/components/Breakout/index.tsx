import React from 'react'

import { Box, BoxProps } from '../Box'

/**
 * Breakout layout component
 */
export function Breakout(props: BoxProps) {
  const {
    children,
    layoutName = 'breakout',
    styles: localStyles = () => '',
    ...rest
  } = props

  return (
    <Box
      {...{ ...rest, layoutName }}
      styles={(selector, theme) => `
        ${selector} {
          width: 100vw;
          margin-left: 50%;
          transform: translateX(-50%);
        }
        ${localStyles(selector, theme)}
      `}
    >
      {children}
    </Box>
  )
}
