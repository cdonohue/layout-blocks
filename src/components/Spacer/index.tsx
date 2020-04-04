import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'

type Props = {
  children?: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const name = 'spacer'

/**
 * Spacer layout component
 */
export function Spacer(props: Props) {
  const { children, as: Tag = 'div', ...rest } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  return (
    <>
      {createStyleTag`
        ${selector} {
          flex: 1 1 auto;
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
