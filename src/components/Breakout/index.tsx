import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'breakout'

/**
 * Breakout layout component
 */
export function Breakout(props: Props) {
  const { children, Tag, passedProps, selector } = createLayoutConfig({
    name,
    props,
  })

  return (
    <>
      {createStyleTag`
        ${selector} {
          width: 100vw;
          margin-left: 50%;
          transform: translateX(-50%);
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
