import React from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'
import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  horizontal?: boolean
  /** Space between child elements */
  gap?: string | number
}

const name = 'stack'

/**
 * Stack layout component
 */
export function Stack(props: Props) {
  const {
    horizontal = false,
    gap = '0px',
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  const { space } = useTheme()

  const gapValue: string = isNaN(Number(gap)) ? gap : space(gap)

  return (
    <>
      {createStyleTag`
        ${selector} {
          ${generateBoxRules(props)}
          display: flex;
          flex-direction: ${horizontal ? 'row' : 'column'};
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
