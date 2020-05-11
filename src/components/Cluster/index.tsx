import React, { ReactNode } from 'react'
import styled, { StyledProps } from '../../utils/styled'

type Props = StyledProps & {
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Horizontal alignment */
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** Space value used for gap between children */
  gap?: string
  children?: ReactNode
}

const _Cluster = styled.div`
  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify = 'start' }) =>
      ['start', 'end'].includes(justify) ? `flex-${justify}` : justify};
    align-items: ${({ align = 'stretch' }) =>
      ['start', 'end'].includes(align) ? `flex-${align}` : align};
    margin: calc(${({ gap = '0px' }) => gap} / 2 * -1);
  }

  & > * > * {
    margin: calc(${({ gap = '0px' }) => gap} / 2);
  }
`

export const Cluster = (props: Props) => (
  <_Cluster {...{ ...props, layoutName: 'cluster' }}>
    <div>{props.children}</div>
  </_Cluster>
)
