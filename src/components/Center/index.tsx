import React from 'react'

import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'
import useTheme from '../../utils/useTheme'
import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  /** Controls the max width of the content */
  max?: string
  /** Controls the centering of the text content */
  centerText?: boolean
  /** Left/right margin to leave when container width is the same as content width */
  gutter?: string | number
  /** Intrinsically center the children (layout using flex) */
  intrinsic?: boolean
}

const name = 'center'

/**
 * Center layout component
 */
export function Center(props: Props) {
  const {
    max = '60ch',
    centerText = false,
    gutter = null,
    intrinsic = false,
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
          box-sizing: content-box;
          margin-left: auto;
          margin-right: auto;
          max-width: ${max};
          ${centerText ? 'text-align: center;' : ''}
          ${
            gutter
              ? `
            padding-left: ${gutterValue};
            padding-right: ${gutterValue};
          `
              : ''
          }
          ${
            intrinsic
              ? `
            display:flex;
            flex-direction: column;
            align-items: center;
          `
              : ''
          }
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
