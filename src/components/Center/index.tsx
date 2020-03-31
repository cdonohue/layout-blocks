import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

type Props = {
  /** Controls the max width of the content */
  max?: string
  /** Controls the centering of the text content */
  centerText?: boolean
  /** Left/right margin to leave when container width is the same as content width */
  gutter?: string
  /** Intrinsically center the children (layout using flex) */
  intrinsic?: boolean
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'center'

/**
 * Center layout component
 */
export function Center(props: Props) {
  const {
    max = '60ch',
    centerText = false,
    gutter = 0,
    intrinsic = false,
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, {
    max,
    centerText,
    gutter,
    intrinsic,
  })
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
        ${selector} {
          box-sizing: content-box;
          margin-left: auto;
          margin-right: auto;
          max-width: ${max};
          ${centerText ? 'text-align: center;' : ''}
          padding-left: ${gutter};
          padding-right: ${gutter};
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
