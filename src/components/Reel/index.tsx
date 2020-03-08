import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Controls padding all around box */
  itemWidth?: string
  space?: string
  height?: string
  children?: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  itemWidth: 'auto',
  space: 'var(--space-md)',
  height: 'auto',
}

const name = 'reel'

/**
 * Reel layout component
 */
export function Reel(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { itemWidth, space, height } = api

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: flex;
          height: ${height};
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-color: #fff #000;
        }
        
        ${selector}::-webkit-scrollbar {
          height: 1rem;
        }
        
        ${selector}::-webkit-scrollbar-track {
          background-color: #000;
        }
        
        ${selector}::-webkit-scrollbar-thumb {
          background-color: #000;
          background-image: linear-gradient(#000 0, #000 0.25rem, #fff 0.25rem, #fff 0.75rem, #000 0.75rem);
        }
        
        ${selector} > * {
          flex: 0 0 ${itemWidth};
        }
        
        
        ${selector} > img {
          height: 100%;
          flex-basis: auto;
          width: auto;
        }
        
        ${selector} > * + * {
          margin-left: ${space};
        }
        
        ${selector}.overflowing {
          padding-bottom: ${space};
        }
      `}
      <Tag {...passedProps}>
        <div>{children}</div>
      </Tag>
    </>
  )
}
