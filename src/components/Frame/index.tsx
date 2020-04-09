import React, { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
  /** Aspect ratio of element (Form of <width>:<height>) */
  ratio?: string
  children?: ReactNode
}

/**
 * Frame layout component
 */
export function Frame(props: Props) {
  const {
    ratio = '16:9',
    layoutName = 'frame',
    styles: localStyles = () => '',
    children,
    ...rest
  } = props

  const [denominator, numerator] = ratio.split(':')

  return (
    <Box
      {...{ ...rest, layoutName }}
      styles={(selector, theme) => `
        ${selector} {
          padding-bottom: calc(${Number(numerator)} / ${Number(
        denominator
      )} * 100%);
          position: relative;
        }
  
        ${selector} > * {
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
  
        ${selector} > img,
        ${selector} > video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        ${localStyles(selector, theme)}
      `}
    >
      {children}
    </Box>
  )
}
