import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type HorizontalAlignment = 'leading' | 'center' | 'trailing' | 'stretch'

type Props = LayoutProps & {
  /** Horizontal alignment */
  alignment?: HorizontalAlignment
}

const keyToFlexLookup: Record<HorizontalAlignment, string> = {
  leading: 'flex-start',
  center: 'center',
  trailing: 'flex-end',
  stretch: 'stretch',
}

function translateToFlex(key: HorizontalAlignment): string {
  return keyToFlexLookup[key]
}

export const VStack = forwardRef((props: Props, ref: any) => {
  const {
    as: Tag = 'div',
    alignment = 'stretch',
    style: userStyles = {},
    children,
    ...rest
  } = props

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: translateToFlex(alignment),
    justifyContent: 'center',
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
