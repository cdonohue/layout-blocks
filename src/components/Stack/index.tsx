import React, { forwardRef } from 'react'
import styled, { StyledProps } from '../../utils/styled'

type Props = StyledProps & {
  inline?: boolean
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Horizontal alignment */
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** Space between child elements */
  gap?: string | number
}

const StyledStack = styled.div`
  & {
    display: flex;
    flex-direction: ${({ inline = false }) => (inline ? 'row' : 'column')};
    justify-content: ${({ justify = 'start' }) =>
      ['start', 'end'].includes(justify) ? `flex-${justify}` : justify};
    align-items: ${({ align = 'stretch' }) =>
      ['start', 'end'].includes(align) ? `flex-${align}` : align};
  }

  & > *:not(style) ~ *:not(style) {
    ${({ inline = false, gap = '0px' }) => `
    margin-${inline ? 'left' : 'top'}: ${gap};
    `}
  }
`

export const Stack = forwardRef((props: Props, ref: any) => (
  <StyledStack {...{ ...props, ref, layoutName: 'stack' }} />
))
