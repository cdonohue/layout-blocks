import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

export type BoxProps = {
  fgColor?: string
  bgColor?: string
  /** Controls padding all around box */
  padding?: number | string
  paddingX?: number | string
  paddingY?: number | string
  paddingTop?: number | string
  paddingRight?: number | string
  paddingBottom?: number | string
  paddingLeft?: number | string
  layoutName?: string
  stretch?: boolean
  size?: string
  styles?: (selector?: string, theme?: Record<string, any>) => string
  children?: ReactNode
  /** HTML element to render */
  as?: any
  ref?: any
  className?: string
}

function calculatePaddingValue(value: string | number | null): string {
  const { space } = useTheme()

  return isNaN(Number(value)) ? value : space(value)
}

function maybeLookupColor(colorKey: string) {
  const { colors } = useTheme()

  const [name, variant] = colorKey.split('.')

  if (colors[name] && typeof colors[name] === 'string') {
    return colors[name]
  }

  if (colors[name] && colors[name][variant]) {
    return colors[name][variant]
  }

  return colorKey
}

export function generateBoxRules(props: BoxProps) {
  const {
    bgColor = null,
    fgColor = null,
    padding = null,
    paddingX = null,
    paddingY = null,
    paddingTop = null,
    paddingRight = null,
    paddingBottom = null,
    paddingLeft = null,
    stretch = false,
    size = '',
  } = props

  const paddingValue = calculatePaddingValue(padding)
  const paddingXValue = calculatePaddingValue(paddingX)
  const paddingYValue = calculatePaddingValue(paddingY)
  const paddingTopValue = calculatePaddingValue(paddingTop)
  const paddingRightValue = calculatePaddingValue(paddingRight)
  const paddingBottomValue = calculatePaddingValue(paddingBottom)
  const paddingLeftValue = calculatePaddingValue(paddingLeft)

  return `
    position: relative;
    ${fgColor ? `color: ${maybeLookupColor(fgColor)};` : ''}
    ${bgColor ? `background-color: ${maybeLookupColor(bgColor)};` : ''}
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

/**
 * Box layout component
 */
export const Box = React.forwardRef((props: BoxProps, ref) => {
  const {
    padding = null,
    size = null,
    stretch = false,
    as: Tag = 'div',
    styles = () => '',
    layoutName = 'box',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(layoutName, props)
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
          ${selector} {
            ${generateBoxRules(props)}
          }
          ${styles(selector, useTheme())}
        `}
      <Tag {...enhancePropsWithClassname({ ...rest, ref }, layoutClass)}>
        {children}
      </Tag>
    </>
  )
})
