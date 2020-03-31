import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

type Props = {
  /** Controls padding all around box */
  padding?: number | string
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
  const {
    padding = 0,
    size = null,
    stretch = false,
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, { padding, size, stretch })
  const selector = `${Tag}.${layoutClass}`

  const { space } = useTheme()

  const paddingValue: string = isNaN(Number(padding)) ? padding : space(padding)

  return (
    <>
      {createStyleTag`
        ${selector} {
          padding: ${paddingValue};
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
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
