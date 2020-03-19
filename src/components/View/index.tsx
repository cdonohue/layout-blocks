import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  horizontal?: boolean
  size?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  horizontal: false,
  size: null,
}

const name = 'view'

/**
 * View layout component
 */
export function View(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { horizontal, size } = api

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: flex;
          flex-direction: ${horizontal ? 'row' : 'column'};
          ${
            size
              ? `
              flex-grow: 1;
              flex-basis: ${size};
            `
              : `
              flex-grow: 999;
              `
          }
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
