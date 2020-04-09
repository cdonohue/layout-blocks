import React, { FunctionComponent, forwardRef } from 'react'

import useTheme from '../../utils/useTheme'
import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
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

/**
 * Stack layout component
 */
export const Stack = forwardRef((props: Props, ref) => {
  const {
    inline = false,
    align = 'start',
    justify = 'start',
    gap = '0px',
    layoutName = 'stack',
    styles: localStyles = () => '',
    children,
    ...rest
  } = props

  const { space } = useTheme()

  const gapValue: string = isNaN(Number(gap)) ? gap : space(gap)

  return (
    <Box
      {...{ ...rest, layoutName, ref }}
      styles={(selector, theme) => `
        ${selector} {
          display: flex;
          flex-direction: ${inline ? 'row' : 'column'};
          justify-content: ${
            ['start', 'end'].includes(justify) ? `flex-${justify}` : justify
          };
          align-items: ${
            ['start', 'end'].includes(align) ? `flex-${align}` : align
          };
        }
    
        ${selector} > *:not(style) ~ *:not(style) {
          margin-${inline ? 'left' : 'top'}: ${gapValue};
        }
        ${localStyles(selector, theme)}
      `}
    >
      {children}
    </Box>
  )
})

export const Row: FunctionComponent = (props: Props) => (
  <Stack inline {...props} />
)
export const Column: FunctionComponent = (props: Props) => <Stack {...props} />
