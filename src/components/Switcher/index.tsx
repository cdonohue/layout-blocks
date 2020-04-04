import React, { ReactNode } from 'react'

import useTheme from '../../utils/useTheme'
import createStyleTag from '../../utils/createStyleTag'
import {
  createLayoutClassname,
  enhancePropsWithClassname,
} from '../../utils/createLayoutConfig'
import type { BoxProps } from '../Box'
import { generateBoxRules } from '../Box'

type Props = BoxProps & {
  /** Controls padding all around box */
  gap?: string | number
  threshold?: string
  limit?: number
  children?: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const name = 'switcher'

/**
 * Switcher layout component
 */
export function Switcher(props: Props) {
  const {
    threshold = '67ch',
    gap = '0px',
    limit = 4,
    as: Tag = 'div',
    children,
    ...rest
  } = props

  const layoutClass = createLayoutClassname(name, props)
  const selector = `${Tag}.${layoutClass}`

  const { space } = useTheme()

  const gapValue: string = isNaN(Number(gap)) ? gap : space(gap)

  return (
    <>
      {createStyleTag`
        ${selector} > * {
          ${generateBoxRules(props)}
          display: flex;
          flex-wrap: wrap;
          margin: calc((${gapValue} / 2) * -1);
        }
  
        ${selector} > * > * {
          flex-grow: 1;
          flex-basis: calc((${threshold} - (100% - ${gapValue})) * 999);
          margin: calc(${gapValue} / 2);
        }
  
        ${selector} > * > .${layoutClass}-overflow {
          flex-basis: 100%;
        }
      `}
      <Tag {...enhancePropsWithClassname(rest, layoutClass)}>
        <div>
          {React.Children.map(children, (child, i) => {
            if (React.isValidElement(child)) {
              const { className = '' } = child.props
              return React.cloneElement(child, {
                className:
                  i >= limit
                    ? `${className} ${layoutClass}-overflow`
                    : className,
              })
            }
            return child
          })}
        </div>
      </Tag>
    </>
  )
}
