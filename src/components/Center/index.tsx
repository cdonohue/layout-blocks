import React from 'react'
import styled, { StyledProps } from '../../utils/styled'

type Props = StyledProps & {
  /** Controls the max width of the content */
  max?: string
  /** Intrinsically center the children (layout using flex) */
  intrinsic?: boolean
}

/**
 * Center layout component
 */
const _Center = styled.div`
  & {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ max = '60ch' }) => max};
    ${({ intrinsic = false }) =>
      intrinsic
        ? `
      display:flex;
      flex-direction: column;
      align-items: center;
    `
        : ''}
  }
`

export const Center = (props: Props) => (
  <_Center {...{ ...props, layoutName: 'center' }} />
)
