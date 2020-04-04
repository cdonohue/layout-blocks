import React, { ReactNode, useRef } from 'react'

import useResizeObserver from '../../utils/useResizeObserver'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'
import useTheme from '../../utils/useTheme'
import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  /** Minimum width of children */
  min?: string
  /** Space value used for gap between children */
  gap?: string | number
  children?: ReactNode
  /** HTML element to render */
  as?: any
}

const name = 'grid'

/**
 * Grid layout component
 */
export function Grid(props: Props) {
  const {
    min = '250px',
    gap = '0px',
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  const { space } = useTheme()

  const gapValue: string = isNaN(Number(gap)) ? gap : space(gap)

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

  const passedProps = enhancePropsWithClassname(rest, layoutClass)
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
          ${generateBoxRules(props)}
          display: grid;
          grid-gap: ${gapValue};
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
