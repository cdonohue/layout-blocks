import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'container'

/**
 * Container layout component
 */
export function Container(props: Props) {
  const { children, Tag, passedProps, selector } = createLayoutConfig({
    name,
    props,
  })

  return (
    <>
      {createStyleTag`
        ${selector} {
          position: relative
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
