import React, { ReactNode, useRef } from 'react'

import useResizeObserver from '../../utils/useResizeObserver'
import useTheme from '../../utils/useTheme'
import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
  /** Minimum width of children */
  min?: string
  /** Space value used for gap between children */
  gap?: string | number
  children?: ReactNode
}

/**
 * Grid layout component
 */
export function Grid(props: Props) {
  const {
    min = '250px',
    gap = '0px',
    layoutName = 'grid',
    styles: localStyles = () => '',
    children,
  } = props

  const { space } = useTheme()

  const gapValue: string = isNaN(Number(gap)) ? gap : space(gap)

  const ref = useRef<HTMLElement>(null!)
  const childRef = useRef<HTMLDivElement>(null!)
  const { width } = useResizeObserver(ref)

  let isWide = false

  // Add a test element to compare the min value to the container
  if (childRef.current) {
    childRef.current.style.width = min
    isWide = width > childRef.current.offsetWidth
  }

  const containerClass = 'aboveMin'

  const { className = '' } = props

  const enhancedProps = {
    ...props,
    layoutName,
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
    <Box
      {...enhancedProps}
      styles={(selector, theme) => `
      ${selector} {
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
      ${localStyles(selector, theme)}
    `}
    >
      {children}
      <div ref={childRef} />
    </Box>
  )
}
