import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Side to treat as the sidebar */
  side?: 'left' | 'right'
  /** Width value to limit the sidebar to in horizontal mode */
  sideWidth?: string | null
  /** Percentage value to use as the breakpoint for the element opposite the sidebar */
  contentMin?: string
  /** Space between elements (sidebar and content) */
  space?: string
  /** Stretch sidebar to match content (and vice versa) */
  stretch?: boolean
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  side: 'left',
  sideWidth: null,
  contentMin: '50%',
  space: '0',
  stretch: false,
}

const name = 'sidebar'

/**
 * Sidebar layout component
 */
export function Sidebar(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { side, sideWidth, contentMin, space, stretch } = api

  const unitSpace = space === '0' ? '0px' : space

  return (
    <>
      {createStyleTag`
        ${selector} {
          overflow: hidden;
        }
  
        ${selector} > * {
          display: flex;
          flex-wrap: wrap;
          ${!stretch ? `align-items: flex-start;` : ''}
          margin: calc(${unitSpace} / 2 * -1);
          
        }
  
        ${selector} > * > * {
          margin: calc(${unitSpace} / 2);
          ${sideWidth ? `flex-basis: ${sideWidth};` : ''}
          flex-grow: 1;
        }
  
        ${selector} > * > :${
        side === 'left' ? 'last-of-type' : 'first-of-type'
      }:not(style) {
          flex-basis: 0;
          flex-grow: 999;
          min-width: calc(${contentMin} - ${unitSpace});
        }
      `}
      <Tag {...passedProps}>
        <div>{children}</div>
      </Tag>
    </>
  )
}
