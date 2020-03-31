import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
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
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    name,
    props,
  })

  const { height } = api

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
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
