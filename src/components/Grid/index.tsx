import React, { useRef } from 'react'
import useResizeObserver from '../../utils/useResizeObserver'
import styled, { StyledProps } from '../../utils/styled'

type Props = StyledProps & {
  /** Minimum width of children */
  min?: string
  /** Space value used for gap between children */
  gap?: string | number
}

/**
 * Breakout layout component
 */
const _Grid = styled.div`
  & {
    display: grid;
    grid-gap: ${({ gap = '0px' }) => gap};
    grid-template-columns: 100%;
  }

  &.aboveMin {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${({ min = '200px' }) => min}, 1fr)
    );
  }

  @supports (width: min(${({ min = '200px' }) => min}, 100%)) {
    & {
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(${({ min = '200px' }) => min}, 100%), 1fr)
      );
    }
  }
`

export const Grid = (props: Props) => {
  const { min = '200px' } = props

  const childRef = useRef<HTMLDivElement>(null!)
  const { ref, width } = useResizeObserver()

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
    layoutName: 'grid',
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
    <_Grid {...enhancedProps}>
      {props.children}
      <div ref={childRef} />
    </_Grid>
  )
}
