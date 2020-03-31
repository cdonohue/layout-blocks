import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

type Props = {
  horizontal?: boolean
  /** Space between child elements */
  gap?: string | number
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'stack'

/**
 * Stack layout component
 */
export function Stack(props: Props) {
  const {
    horizontal = false,
    gap = 0,
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, { horizontal, gap })
  const selector = `${Tag}.${layoutClass}`

  const { space } = useTheme()

  const gapValue: string = isNaN(Number(gap)) ? gap : space(gap)

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: flex;
          flex-direction: ${horizontal ? 'row' : 'column'};
          min-height: 100%;
          justify-content: flex-start;
        }
    
        ${selector} > *:not(style) ~ *:not(style) {
          margin-${horizontal ? 'left' : 'top'}: ${gapValue};
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
