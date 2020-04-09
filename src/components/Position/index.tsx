import React from 'react'

import useTheme from '../../utils/useTheme'
import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
  /** Space to offset from the edge of the containing element */
  gutter?: string | number
  /** Let the element flow outside of the containing element */
  breakout?: boolean
  /** Contain the element to the viewport (instead of the document) */
  fixed?: boolean
  /** Positioning along x-axis */
  x?: 'left' | 'center' | 'right' | 'full'
  /** Positioning along y-axis */
  y?: 'top' | 'center' | 'bottom' | 'full'
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

function generatePinningRules(x: string, y: string, margin: string) {
  return `
    ${generateXPinningRules(x, margin)}
    ${generateYPinningRules(y, margin)}
    ${
      x === 'center' && y === 'center'
        ? `transform: translate(-50%,-50%);`
        : x === 'center'
        ? `transform: translateX(-50%);`
        : y === 'center'
        ? `transform: translateY(-50%);`
        : ''
    }
  `
}

function generateXPinningRules(x: string, margin: string) {
  if (x === 'left') {
    return `
      left: ${margin};
    `
  }
  if (x === 'right') {
    return `
      right: ${margin};
    `
  }
  if (x === 'full') {
    return `
      left: ${margin};
      right: ${margin};
    `
  }
  return `
      left: 50%;
    `
}

function generateYPinningRules(y: string, margin: string) {
  if (y === 'top') {
    return `
      top: ${margin};
    `
  }
  if (y === 'bottom') {
    return `
      bottom: ${margin};
    `
  }
  if (y === 'full') {
    return `
      top: ${margin};
      bottom: ${margin};
    `
  }
  return `
      top: 50%;
    `
}

/**
 * Position layout component
 */
export function Position(props: Props) {
  const {
    breakout = false,
    gutter = '0px',
    fixed = false,
    x = 'center',
    y = 'center',
    layoutName = 'position',
    styles: localStyles = () => '',
    children,
    ...rest
  } = props

  const { space } = useTheme()

  const gutterValue: string = isNaN(Number(gutter)) ? gutter : space(gutter)

  return (
    <Box
      {...{ ...rest, layoutName }}
      styles={(selector, theme) => `
        ${selector} {
          position: absolute;
          ${generatePinningRules(x, y, gutterValue)}
          ${
            !breakout
              ? `
            max-width: calc(100% - (${gutterValue} * 2));
            max-height: calc(100% - (${gutterValue} * 2));
            overflow: auto;`
              : ''
          }
          ${
            fixed
              ? `
            position: fixed;`
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
