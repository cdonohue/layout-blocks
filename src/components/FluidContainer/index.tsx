import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Controls padding all around box */
  reverse?: boolean
  horizontal?: boolean
  fixedWidth?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  reverse: false,
  fixedWidth: null,
  horizontal: false,
}

const name = 'fluidcontainer'

/**
 * FluidContainer layout component
 */
export function FluidContainer(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { horizontal, reverse } = api

  return (
    <>
      {createStyleTag`
        ${selector} {
          overflow: hidden;
        }

        ${selector} > * {
          display: flex;
          height: 100%;
          flex-direction: ${horizontal ? 'row' : 'column'};
        }
  
        ${selector} > * > * {       
          flex-grow: 1;
        }
  
        ${selector} > * > :${
        reverse ? 'first-of-type' : 'last-of-type'
      }:not(style) {
          flex-basis: 0;
          flex-grow: 999;
        }
      `}
      <Tag {...passedProps}>
        <div>{children}</div>
      </Tag>
    </>
  )
}
