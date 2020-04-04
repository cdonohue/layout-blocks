import React, { ReactNode } from 'react'

import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'
import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  /** Aspect ratio of element (Form of <width>:<height>) */
  ratio?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const name = 'frame'

/**
 * Frame layout component
 */
export function Frame(props: Props) {
  const { ratio = '16:9', as: Tag = 'div', children, ...rest } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  const [denominator, numerator] = ratio.split(':')

  return (
    <>
      {createStyleTag`
        ${selector} {
          ${generateBoxRules(props)}
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
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>{children}</Tag>
    </>
  )
}
