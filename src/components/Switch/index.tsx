import React, { useRef } from 'react'

import useResizeObserver from '../../utils/useResizeObserver'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  breakpoints?: Record<string, any>
  as?: any
}

/**
 * Switch layout component
 */
export function Switch(props: Props) {
  const { breakpoints = {}, as:Tag = 'div', children, ...rest } = props

  const layoutClass = createLayoutClassname('switch', {})
  const selector = `${Tag}.${layoutClass}`

  const referenceEl = useRef<HTMLDivElement>(null!)

  const breakpointMap: Record<number, string> = {}

  if (referenceEl.current) {
    Object.keys(breakpoints).forEach(breakpoint => {     
      referenceEl.current.style.width = breakpoint
      breakpointMap[referenceEl.current.offsetWidth] = breakpoint
    })
  }
  
  const ref = useRef<HTMLElement>(null!)
  const { width } = useResizeObserver({ ref })

  const breakpointToRender: number | null = Math.max(
    ...Object.keys(breakpointMap)
      .map(Number)
      .sort()
      .filter(breakPointWidth => width > breakPointWidth)
  )

  const finalProps = {
    ...rest,
    ref
  }

  return (
    <>
      {createStyleTag`
        ${selector} {
          ${generateBoxRules(props)}
        }
      `}
      <Tag {...enhancePropsWithClassname(finalProps, layoutClass)}>
        {breakpointToRender && isFinite(breakpointToRender)
          ? breakpoints[breakpointMap[breakpointToRender]]
          : children}       
      </Tag>
      <div style={{position:'absolute'}} ref={referenceEl} />
    </>
  )
}
