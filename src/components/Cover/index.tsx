import React, { ReactNode } from 'react'

import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
  /** Minimum height to cover */
  height?: string
  children?: ReactNode
}

/**
 * Cover layout component
 */
export function Cover(props: Props) {
  const {
    height = '100vh',
    children,
    layoutName = 'cover',

    styles: localStyles = () => '',
  } = props

  return (
    <Box
      {...{ ...props, layoutName }}
      styles={(selector, theme) => `
        ${selector} {       
          display: flex;
          flex-direction: column;
          min-height: ${height};
        }       
        ${localStyles(selector, theme)}
      `}
    >
      {children}
    </Box>
  )
}
