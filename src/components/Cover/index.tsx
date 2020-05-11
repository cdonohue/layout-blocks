import React from 'react'
import styled, { StyledProps } from '../../utils/styled'

type Props = StyledProps & {
  /** Minimum height to cover */
  height?: string
}

const _Cover = styled.div`
  & {
    display: flex;
    flex-direction: column;
    min-height: ${({ height = '100vh' }) => height};
  }
`

export const Cover = (props: Props) => (
  <_Cover {...{ ...props, layoutName: 'cover' }} />
)
