import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Controls padding all around box */
  space?: string
  threshold?: string
  limit?: number
  children?: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  threshold: 'var(--measure)',
  space: 'var(--space-md)',
  limit: 4,
}

const name = 'switcher'

/**
 * Switcher layout component
 */
export function Switcher(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { threshold, space, limit } = api

  return (
    <>
      {createStyleTag`
        ${selector} > * {
          display: flex;
          flex-wrap: wrap;
          margin: calc((${space} / 2) * -1);
        }
  
        ${selector} > * > * {
          flex-grow: 1;
          flex-basis: calc((${threshold} - (100% - ${space})) * 999);
          margin: calc(${space} / 2);
        }
  
        ${selector} > * > :nth-last-of-type(n+${Number(limit) + 1}):not(style),
        ${selector} > * > :nth-last-of-type(n+${Number(limit) +
        1}):not(style) ~ *:not(style) {
          flex-basis: 100%;
        }
      `}
      <Tag {...passedProps}>
        <div>{children}</div>
      </Tag>
    </>
  )
}
