import React from 'react'
import styled, { StyledProps } from '../../utils/styled'

/**
 * Breakout layout component
 */
const _Scroll = styled.div`
  & {
    height: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  & > * {
    scroll-snap-align: center;
  }
`

export const Scroll = (props: StyledProps) => (
  <_Scroll {...{ ...props, layoutName: 'scroll' }} />
)
