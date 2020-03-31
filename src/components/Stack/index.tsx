import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  horizontal?: boolean
  /** Space between child elements */
  gap?: string | number
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'stack'

/**
 * Stack layout component
 */
export function Stack(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    name,
    props,
  })

  const { horizontal, gap: gapValue } = api
  const { space } = useTheme()

  const gap = Number.isInteger(gapValue) ? space[gapValue] : gapValue

  return (
    <>
      {createStyleTag`
        ${selector} {
          display: flex;
          flex-direction: ${horizontal ? 'row' : 'column'};
          min-height: 100%;
          justify-content: flex-start;
        }
    
        ${selector} > *:not(style) ~ *:not(style) {
          margin-${horizontal ? 'left' : 'top'}: ${gap};
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
