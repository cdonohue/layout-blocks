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
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  basis?: string
  grow?: number
  shrink?: number
  alignSelf?: 'start' | 'center' | 'end' | 'stretch'
  /** Horizontal alignment */
  justifySelf?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  styles?: (selector?: string, theme?: Record<string, any>) => string
  children?: ReactNode
  /** HTML element to render */
  as?: any
  className?: string
}

function calculateSpaceValue(value: string | number | null): string {
  const { space } = useTheme()

  return isNaN(Number(value)) ? value : space(value)
}

/**
 * Box layout component
 */
export const Box = React.forwardRef((props: BoxProps, ref) => {
  const {
    padding = null,
    paddingX = null,
    paddingY = null,
    paddingTop = null,
    paddingRight = null,
    paddingBottom = null,
    paddingLeft = null,
    stretch = false,
    width = null,
    height = null,
    maxWidth = null,
    maxHeight = null,
    basis = null,
    grow = null,
    shrink = null,
    as: Tag = 'div',
    styles = () => '',
    layoutName = 'box',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(layoutName, props)
  const selector = `${Tag}.${layoutClass}`

  const paddingValue = calculateSpaceValue(padding)
  const paddingXValue = calculateSpaceValue(paddingX)
  const paddingYValue = calculateSpaceValue(paddingY)
  const paddingTopValue = calculateSpaceValue(paddingTop)
  const paddingRightValue = calculateSpaceValue(paddingRight)
  const paddingBottomValue = calculateSpaceValue(paddingBottom)
  const paddingLeftValue = calculateSpaceValue(paddingLeft)

  const widthValue = calculateSpaceValue(width)
  const heightValue = calculateSpaceValue(height)
  const maxWidthValue = calculateSpaceValue(maxWidth)
  const maxHeightValue = calculateSpaceValue(maxHeight)

  return (
    <>
      {createStyleTag`
          ${selector} {
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
              grow
                ? `
              flex-grow: ${grow};
            `
                : ''
            }
            ${
              shrink
                ? `
              flex-shrink: ${shrink};
            `
                : ''
            }
            ${
              basis
                ? `
              flex-basis: ${basis};
            `
                : ''
            }
            ${
              width
                ? `  
              width: ${widthValue};
            `
                : ''
            }
            ${
              height
                ? `
              height: ${heightValue};
            `
                : ''
            }
            ${
              maxWidth
                ? `  
              max-width: ${maxWidthValue};
            `
                : ''
            }
            ${
              maxHeight
                ? `  
              max-height: ${maxHeightValue};
            `
                : ''
            }
            
          }
          ${styles(selector, useTheme())}
        `}
      <Tag {...enhancePropsWithClassname({ ...rest, ref }, layoutClass)}>
        {children}
      </Tag>
    </>
  )
})
