import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

type Props = {
  /** Minimum height to cover */
  height?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'cover'

/**
 * Cover layout component
 */
export function Cover(props: Props) {
  const { height = '100vh', as: Tag = 'div', children, ...rest } = props

  const layoutClass = createLayoutClassname(name, { height })
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: flex;
          flex-direction: column;
          height: ${height};
        }

        ${selector} > * {
          min-height: 100%;
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
