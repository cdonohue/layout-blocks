import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type VerticalAlignment = 'top' | 'center' | 'bottom' | 'stretch'

type Props = LayoutProps & {
  /** Vertical alignment */
  alignment?: VerticalAlignment
}

const keyToFlexLookup: Record<VerticalAlignment, string> = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  stretch: 'stretch',
}

function translateToFlex(key: VerticalAlignment): string {
  return keyToFlexLookup[key]
}

export const HStack = forwardRef((props: Props, ref: any) => {
  const {
    as: Tag = 'div',
    alignment = 'stretch',
    style: userStyles = {},
    children,
    ...rest
  } = props

  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: translateToFlex(alignment),
    justifyContent: 'center',
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
