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
    ...rest
  } = props

  return (
    <Box
      {...rest}
      layoutName="cover"
      styles={(selector, theme) => `
        ${selector} {       
          display: flex;
          flex-direction: column;
          height: ${height};
        }

        ${selector} > * {
          min-height: 100%;
        }
        ${localStyles(selector, theme)}
      `}
    >
      {children}
    </Box>
  )
}
