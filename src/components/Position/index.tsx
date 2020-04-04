import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'
import useTheme from '../../utils/useTheme'
import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  /** Space to offset from the edge of the containing element */
  gutter?: string
  /** Let the element flow outside of the containing element */
  breakout?: boolean
  /** Contain the element to the viewport (instead of the document) */
  fixed?: boolean
  /** Positioning along x-axis */
  x?: 'left' | 'center' | 'right' | 'full'
  /** Positioning along y-axis */
  y?: 'top' | 'center' | 'bottom' | 'full'
  children?: ReactNode
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

const name = 'position'

/**
 * Position layout component
 */
export function Position(props: Props) {
  const {
    breakout = false,
    gutter = 'var(--space-md)',
    fixed = false,
    x = 'center',
    y = 'center',
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  const { space } = useTheme()

  const gutterValue: string = isNaN(Number(gutter)) ? gutter : space(gutter)

  return (
    <>
      {createStyleTag`
        ${selector} {
          ${generateBoxRules(props)}
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
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
