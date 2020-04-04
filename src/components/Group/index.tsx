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
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Horizontal alignment */
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** Space value used for gap between children */
  gap?: string | number
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'group'

/**
 * Group layout component
 */
export function Group(props: Props) {
  const {
    align = 'center',
    justify = 'start',
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
          overflow: hidden;
        }
  
        ${selector} > * {
          ${generateBoxRules(props)}
          display: flex;
          flex-wrap: wrap;
          justify-content: ${
            ['start', 'end'].includes(justify) ? `flex-${justify}` : justify
          };
          align-items: ${
            ['start', 'end'].includes(align) ? `flex-${align}` : align
          };
          margin: calc(${gapValue} / 2 * -1);
        }
  
        ${selector} > * > * {
          margin: calc(${gapValue} / 2);
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>
        <div>{children}</div>
      </Tag>
    </>
  )
}
