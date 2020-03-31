import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Controls padding all around box */
  padding?: string | number
  stretch?: boolean
  size?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
  className?: string
}

const name = 'box'

/**
 * Box layout component
 */
export function Box(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    name,
    props,
  })

  const { padding: paddingValue, stretch, size } = api
  const { space } = useTheme()

  const padding = Number.isInteger(paddingValue)
    ? space[paddingValue]
    : paddingValue

  return (
    <>
      {createStyleTag`
        ${selector} {
          padding: ${padding};
          flex-basis: auto;
          ${
            stretch
              ? `
            flex-grow: 999;
            flex-basis: 0;
          `
              : ''
          }
          ${
            size
              ? `
            flex-basis: ${size};
          `
              : ''
          }
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
