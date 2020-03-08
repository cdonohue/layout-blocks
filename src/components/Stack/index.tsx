import React, { ReactNode, useLayoutEffect, useRef } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Recursively apply spacing (for nested stacks) */
  recursive?: boolean
  /** Vertical space between child elements */
  space?: string
  /** Split after n children */
  splitAfter?: number
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  recursive: false,
  space: 'var(--space-md)',
  splitAfter: null,
}

const name = 'stack'

/**
 * Stack layout component
 */
export function Stack(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { recursive, space, splitAfter } = api

  const ref = useRef<HTMLElement>(null!)

  if (splitAfter) {
    useLayoutEffect(() => {
      if (ref && ref.current) {
        Array.from(ref.current.children)
          .filter(child => {
            return child.tagName !== 'STYLE'
          })
          .forEach((child, i, list) => {
            if (list.length === 1) {
              child.classList.add('only-child')
            }
            if (i + 1 === splitAfter) {
              child.classList.add('split-after')
            }
          })
      }
    })
  }

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
    
        ${selector} ${!recursive ? '>' : ''} *:not(style) ~ *:not(style) {
          margin-top: ${space};
        }

        ${selector} > .only-child {
          height: 100%;
        }

        ${selector} > .split-after {
          margin-bottom: auto;
        }
      `}
      <Tag ref={ref} {...passedProps}>
        {children}
      </Tag>
    </>
  )
}
