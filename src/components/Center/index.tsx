import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
  /** Controls the max width of the content */
  max?: string
  /** Controls the centering of the text content */
  centerText?: boolean
  /** Left/right margin to leave when container width is the same as content width */
  gutter?: string | number
  /** Intrinsically center the children (layout using flex) */
  intrinsic?: boolean
  children?: ReactNode
}

/**
 * Center layout component
 */
export function Center(props: Props) {
  const {
    max = '60ch',
    centerText = false,
    gutter = null,
    intrinsic = false,
    layoutName = 'center',
    styles: localStyles = () => '',
    children,
  } = props

  const { space } = useTheme()

  const gutterValue: string = isNaN(Number(gutter)) ? gutter : space(gutter)

  return (
    <Box
      {...{ ...props, layoutName }}
      styles={(selector, theme) => `
        ${selector} {
          box-sizing: content-box;
          margin-left: auto;
          margin-right: auto;
          max-width: ${max};
          ${centerText ? 'text-align: center;' : ''}
          ${
            gutter
              ? `
            padding-left: ${gutterValue};
            padding-right: ${gutterValue};
          `
              : ''
          }
          ${
            intrinsic
              ? `
            display:flex;
            flex-direction: column;
            align-items: center;
          `
              : ''
          }
        }
        ${localStyles(selector, theme)}
      `}
    >
      {children}
    </Box>
  )
}
