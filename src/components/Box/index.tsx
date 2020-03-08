import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Controls padding all around box */
  padding?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  padding: 'var(--space-md)',
}

const name = 'box'

/**
 * Box layout component
 */
export function Box(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { padding } = api

  return (
    <>
      {createStyleTag`
        ${selector} {
          padding: ${padding};
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
