import React from 'react'
import styled, { StyledProps } from '../../utils/styled'

type Props = StyledProps & {
  /** Aspect ratio of element (Form of <width>:<height>) */
  ratio?: string
  overlay?: string
}

const _Frame = styled.div`
  ${({ ratio = '16:9' }) => {
    const [denominator, numerator] = ratio.split(':')

    return `
    & {
    padding-bottom: calc(${Number(numerator)} / ${Number(denominator)} * 100%);
    position: relative;
  }
    `
  }}

  ${({ overlay = '' }) =>
    overlay
      ? `
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-image: ${overlay};
        }
      `
      : ''}

  & > * {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > img,
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Frame = (props: Props) => (
  <_Frame {...{ ...props, layoutName: 'cover' }} />
)
