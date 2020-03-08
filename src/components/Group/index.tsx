import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Horizontal alignment */
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** Space value used for gap between children */
  space?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  align: 'center',
  justify: 'start',
  space: 'var(--space-md)',
}

const name = 'group'

/**
 * Group layout component
 */
export function Group(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { align, justify, space } = api

  return (
    <>
      {createStyleTag`
        ${selector} {
          overflow: hidden;
        }
  
        ${selector} > * {
          display: flex;
          flex-wrap: wrap;
          justify-content: ${
            ['start', 'end'].includes(justify) ? `flex-${justify}` : justify
          };
          align-items: ${
            ['start', 'end'].includes(align) ? `flex-${align}` : align
          };
          margin: calc(${space} / 2 * -1);
        }
  
        ${selector} > * > * {
          margin: calc(${space} / 2);
        }
      `}
      <Tag {...passedProps}>
        <div>{children}</div>
      </Tag>
    </>
  )
}
