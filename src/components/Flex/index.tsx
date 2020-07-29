import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type Props = LayoutProps & {
  grow?: string
  shrink?: string
  basis?: string
}

export const Flex = forwardRef((props: Props, ref: any) => {
  const {
    grow = '1',
    shrink = '1',
    basis = '0%',
    as: Tag = 'div',
    style: userStyles = {},
    children,
    ...rest
  } = props

  const style = {
    flex: `${grow} ${shrink} ${basis}`,
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
