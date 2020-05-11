import React from 'react'
import styled, { StyledProps } from '../../utils/styled'

/**
 * Breakout layout component
 */
const _Breakout = styled.div`
  & {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`

export const Breakout = (props: StyledProps) => (
  <_Breakout {...{ ...props, layoutName: 'breakout' }} />
)
