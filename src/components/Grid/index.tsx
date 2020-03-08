import React, { ReactNode, useRef } from 'react'

import useApi from '../../utils/useApi'
import useResizeObserver from '../../utils/useResizeObserver'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Minimum width of children */
  min?: string
  /** Space value used for gap between children */
  space?: string
  children?: ReactNode
  /** HTML element to render */
  as?: any
}

const defaultApi = {
  min: '250px',
  space: 'var(--space-md)',
}

const name = 'grid'

/**
 * Grid layout component
 */
export function Grid(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { min, space } = api

  const ref = useRef<HTMLElement>(null!)
  const childRef = useRef<HTMLDivElement>(null!)
  const { width } = useResizeObserver({ ref })

  let isWide = false

  // Add a test element to compare the min value to the container
  if (childRef.current) {
    childRef.current.style.width = min
    isWide = width > childRef.current.offsetWidth
  }

  const containerClass = 'aboveMin'

  const { className } = passedProps

  const enhancedProps = {
    ...passedProps,
    ref,
    className: className.length
      ? isWide
        ? className.concat(` ${containerClass}`)
        : className
      : isWide
      ? containerClass
      : className,
  }

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: grid;
          grid-gap: ${space};
          grid-template-columns: 100%;
        }
  
        ${selector}.aboveMin {
          grid-template-columns: repeat(auto-fill, minmax(${min}, 1fr));
        }
  
        @supports (width: min(${min}, 100%)) {
          ${selector} {
            grid-template-columns: repeat(auto-fit, minmax(min(${min}, 100%), 1fr));
          }
        }
      `}
      <Tag {...enhancedProps}>
        {children}
        <div ref={childRef} />
      </Tag>
    </>
  )
}
