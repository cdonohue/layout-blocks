import React, { ReactNode } from 'react'

import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
  children?: ReactNode
}

/**
 * Spacer layout component
 */
export function Spacer(props: Props) {
  const {
    children,
    layoutName = 'spacer',
    styles: localStyles = () => '',
    ...rest
  } = props

  return (
    <Box
      {...{ ...rest, layoutName }}
      styles={(selector, theme) => `
        ${selector} {
          flex: 1 1 auto;
        }
        ${localStyles(selector, theme)}
      `}
    >
      {children}
    </Box>
  )
}
