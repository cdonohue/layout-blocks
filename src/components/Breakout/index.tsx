import React from 'react'

import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

const name = 'breakout'

/**
 * Breakout layout component
 */
export function Breakout(props: BoxProps) {
  const { children, as: Tag = 'div', ...rest } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
        ${selector} {
          ${generateBoxRules(props)}
          width: 100vw;
          margin-left: 50%;
          transform: translateX(-50%);
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
