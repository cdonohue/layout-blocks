import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
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

const defaultApi = {
  max: 'var(--measure)',
  centerText: false,
  gutter: '0',
  intrinsic: false,
}

const name = 'center'

/**
 * Center layout component
 */
export function Center(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { max, centerText, gutter, intrinsic } = api

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
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
