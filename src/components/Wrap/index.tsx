import React, { useRef } from 'react'

import useTheme from '../../utils/useTheme'
import useResizeObserver from '../../utils/useResizeObserver'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'
import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  /** Side to treat as the sidebar */
  side?: 'left' | 'right'
  /** Percentage value to use as the breakpoint for the element opposite the sidebar */
  threshold?: string
  /** Space between elements (sidebar and content) */
  gap?: string | number
  /** Stretch sidebar to match content (and vice versa) */
  stretch?: boolean
}

const name = 'sidebar'

/**
 * Sidebar layout component
 */
export function Wrap(props: Props) {
  const {
    side = 'left',
    gap = '0px',
    threshold = '67ch',
    stretch = false,
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
    childRef.current.style.width = threshold
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
        }
  
        ${selector} > *:not([data-wrap-ignore]) {
          display: flex;
          flex-direction: ${isWide ? 'row' : 'column'};
          margin: calc(${gapValue} / 2 * -1);
          ${stretch ? `min-height: 100%;` : ''}
        }
  
        ${selector} > * > * {
          margin: calc(${gapValue} / 2);
          ${
            !isWide
              ? `
            flex: 0 1 auto !important;
          `
              : ''
          }
        }
      `}
      <Tag {...enhancedProps}>
        <div>{children}</div>
        <div data-wrap-ignore ref={childRef} />
      </Tag>
    </>
  )
}
