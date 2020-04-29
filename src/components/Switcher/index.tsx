import React, { forwardRef } from 'react'

import useTheme from '../../utils/useTheme'
import { Box, BoxProps } from '../Box'

type Props = BoxProps & {
  /** Controls padding all around box */
  gap?: string | number
  threshold?: string
  limit?: number
}

/**
 * Switcher layout component
 */
export const Switcher = forwardRef((props: Props, ref) => {
  const {
    threshold = '67ch',
    gap = '0px',
    limit = 4,
    layoutName = 'switcher',
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
        ${selector} > *:not(style) {
          display: flex;
          flex-wrap: wrap;
          margin: calc((${gapValue} / 2) * -1);
        }

        ${selector} > * > *:not(style) {
          flex-grow: 1;
          flex-basis: calc((${threshold} - (100% - ${gapValue})) * 999);
          margin: calc(${gapValue} / 2);
        }

        ${localStyles(selector, theme)}
      `}
    >
      <div>{children}</div>
    </Box>
  )
})
