import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

export type BoxProps = {
  /** Controls padding all around box */
  padding?: number | string
  'padding-x'?: number | string
  'padding-y'?: number | string
  'padding-top'?: number | string
  'padding-right'?: number | string
  'padding-bottom'?: number | string
  'padding-left'?: number | string
  stretch?: boolean
  size?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
  className?: string
}

function calculateValue(value: string | number | null): string {
  const { space } = useTheme()

  return isNaN(Number(value)) ? value : space(value)
}

export function generateBoxRules(props: BoxProps) {
  const {
    padding = null,
    'padding-x': paddingX = null,
    'padding-y': paddingY = null,
    'padding-top': paddingTop = null,
    'padding-right': paddingRight = null,
    'padding-bottom': paddingBottom = null,
    'padding-left': paddingLeft = null,
    stretch = false,
    size = '',
  } = props

  const paddingValue = calculateValue(padding)
  const paddingXValue = calculateValue(paddingX)
  const paddingYValue = calculateValue(paddingY)
  const paddingTopValue = calculateValue(paddingTop)
  const paddingRightValue = calculateValue(paddingRight)
  const paddingBottomValue = calculateValue(paddingBottom)
  const paddingLeftValue = calculateValue(paddingLeft)

  return `
    position: relative;
    ${padding ? `padding: ${paddingValue};` : ''}
    ${
      paddingX
        ? `
      padding-left: ${paddingXValue};
      padding-right: ${paddingXValue};
    `
        : ''
    }
    ${
      paddingY
        ? `
      padding-top: ${paddingYValue};
      padding-bottom: ${paddingYValue};
    `
        : ''
    }
    ${paddingTop ? `padding-top: ${paddingTopValue};` : ''}
    ${paddingRight ? `padding-right: ${paddingRightValue};` : ''}
    ${paddingBottom ? `padding-bottom: ${paddingBottomValue};` : ''}
    ${paddingLeft ? `padding-left: ${paddingLeftValue};` : ''}
    ${
      stretch
        ? `
      flex-grow: 999;
      flex-basis: 0;
    `
        : ''
    }
    ${
      size
        ? `
      flex-basis: ${size};
    `
        : ''
    }
  `
}

const name = 'box'

/**
 * Box layout component
 */
export function Box(props: BoxProps) {
  const {
    padding = null,
    size = null,
    stretch = false,
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
        ${selector} {
          ${generateBoxRules(props)}
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
