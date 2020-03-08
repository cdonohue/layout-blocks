import React, { ReactNode, Children } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** 1-based index of what child to center vertically (Has no effect when there is only one child) */
  centeredIndex?: number
  /** Controls the spacing value between all child elements */
  space?: string
  /** Minimum height to cover */
  minHeight?: string
  /** Also pad the container using the space value */
  isPadded?: boolean
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  centeredIndex: 2,
  space: 'var(--space-md)',
  minHeight: '100vh',
  isPadded: false,
}

const name = 'cover'

/**
 * Cover layout component
 */
export function Cover(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { centeredIndex, space, minHeight, isPadded } = api
  const childrenCount = Children.count(children)

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: flex;
          flex-direction: column;
          min-height: ${minHeight};
          padding: ${isPadded ? space : '0'};
        }
  
        ${selector} > * {
          margin-top: ${space};
          margin-bottom: ${space};
        }
  
        ${selector} {
          display: flex;
          flex-direction: column;
          min-height: ${minHeight};
          padding: ${isPadded ? space : '0'};
        }
  
        ${selector} > :first-of-type:not(style) {
          margin-top: 0;
        }
  
        ${selector} > :last-of-type:not(style) {
          margin-bottom: 0;
        }
  
        ${
          childrenCount === 1
            ? `
          ${selector} > :first-of-type:not(style) {
            margin-top: auto;
            margin-bottom: auto;
          }
        `
            : `
        ${selector} > :nth-of-type(${centeredIndex}):not(style) {
          margin-top: auto;
          margin-bottom: auto;
        }
        `
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
