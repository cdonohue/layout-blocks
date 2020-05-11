import React from 'react'
import styled, { StyledProps } from '../../utils/styled'

type Props = StyledProps & {
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
  zIndex?: number
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

const _Position = styled.div`
  & {
    position: absolute;
    z-index: ${({ zIndex = 'auto' }) => zIndex};
    ${({ x = 'center', y = 'center', gutter = '0px' }) =>
      generatePinningRules(x, y, gutter)}
    ${({ breakout = false, gutter = '0px' }) =>
      !breakout
        ? `
      max-width: calc(100% - (${gutter} * 2));
      max-height: calc(100% - (${gutter} * 2));
      overflow: auto;`
        : ''}
    ${({ fixed = false }) =>
      fixed
        ? `
      position: fixed;`
        : ''}
  }
`

export const Position = (props: Props) => (
  <_Position {...{ ...props, layoutName: 'breakout' }} />
)
