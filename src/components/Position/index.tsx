import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Space to offset from the edge of the containing element */
  margin?: string
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

const defaultApi = {
  breakout: false,
  margin: 'var(--space-md)',
  fixed: false,
  x: 'center',
  y: 'center',
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
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { breakout, margin, fixed, x, y } = api

  return (
    <>
      {createStyleTag`
        ${selector} {
          position: absolute;
          ${generatePinningRules(x, y, margin)}
          ${
            !breakout
              ? `
            max-width: calc(100% - (${margin} * 2));
            max-height: calc(100% - (${margin} * 2));
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
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
