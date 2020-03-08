import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  children?: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const name = 'spacer'

/**
 * Spacer layout component
 */
export function Spacer(props: Props) {
  const { children, Tag, passedProps, selector } = createLayoutConfig({
    name,
    props,
  })

  return (
    <>
      {createStyleTag`
        ${selector} {
          flex: 1 1 auto;
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
