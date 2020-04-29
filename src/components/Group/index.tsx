import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
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
  gap?: string | number
  children?: ReactNode
}

/**
 * Group layout component
 */
export function Group(props: Props) {
  const {
    align = 'center',
    justify = 'start',
    gap = '0px',
    layoutName = 'group',
    styles: localStyles = () => '',
    children,
    ...rest
  } = props

  const { space } = useTheme()

  const gapValue: string = isNaN(Number(gap)) ? gap : space(gap)

  return (
    <Box
      {...{ ...rest, layoutName }}
      styles={(selector, theme) => `
        
  
        ${selector} > * {
          display: flex;
          flex-wrap: wrap;
          justify-content: ${
            ['start', 'end'].includes(justify) ? `flex-${justify}` : justify
          };
          align-items: ${
            ['start', 'end'].includes(align) ? `flex-${align}` : align
          };
          margin: calc(${gapValue} / 2 * -1);
        }
  
        ${selector} > * > * {
          margin: calc(${gapValue} / 2);
        }
        ${localStyles(selector, theme)}
      `}
    >
      <div>{children}</div>
    </Box>
  )
}
