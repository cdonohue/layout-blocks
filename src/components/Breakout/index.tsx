import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

type Props = {
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'breakout'

/**
 * Breakout layout component
 */
export function Breakout(props: Props) {
  const { children, as: Tag = 'div', ...rest } = props

  const layoutClass = createLayoutClassname(name, {})
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
        ${selector} {
          width: 100vw;
          margin-left: 50%;
          transform: translateX(-50%);
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
