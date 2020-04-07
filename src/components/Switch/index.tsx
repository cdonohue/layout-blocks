import React, { useRef, ReactNode } from 'react'

import useResizeObserver from '../../utils/useResizeObserver'

type Props = {
  /** Minimum width of children */
  breakpoints?: Record<string, any>
  children?: ReactNode
  /** HTML element to render */
  as?: any
}

function createBreakpointRefs(breakpoints: Record<string, string>) {
  const refMap: Record<number, string> = {}

  const breakpointRefs = Object.keys(breakpoints).map(breakpoint => {
    const ref = useRef<HTMLDivElement>(null!)

    if (ref.current) {
      ref.current.style.width = breakpoint
      refMap[ref.current.offsetWidth] = breakpoint
    }

    return ref
  })

  return { refMap, breakpointRefs }
}

/**
 * Switch layout component
 */
export function Switch(props: Props) {
  const { breakpoints = {}, children, as: Tag = 'div' } = props

  const ref = useRef<HTMLElement>(null!)
  const { refMap, breakpointRefs } = createBreakpointRefs(breakpoints)
  const { width } = useResizeObserver({ ref })

  const breakpointToRender = Math.max(
    ...Object.keys(refMap)
      .map(Number)
      .sort()
      .filter(breakPointWidth => width > breakPointWidth)
  )

  return (
    <>
      <Tag ref={ref}>
        {isFinite(breakpointToRender)
          ? breakpoints[refMap[breakpointToRender]]
          : children}
        {breakpointRefs.map((ref, i) => (
          <div key={i} ref={ref} />
        ))}
      </Tag>
    </>
  )
}
