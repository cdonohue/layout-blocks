import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

export type BoxProps = {
  /** Controls padding all around box */
  padding?: number | string
  stretch?: boolean
  size?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export function generateBoxRules(props: BoxProps) {
  const { padding = null, stretch = false, size = '' } = props
  const { space } = useTheme()

  const paddingValue: string = isNaN(Number(padding)) ? padding : space(padding)

  return `
    position: relative;
    ${padding ? `padding: ${paddingValue};` : ''}
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
  `
}

const name = 'box'

/**
 * Box layout component
 */
export function Box(props: BoxProps) {
  const {
    padding = null,
    size = null,
    stretch = false,
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
        ${selector} {
          ${generateBoxRules(props)}
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
