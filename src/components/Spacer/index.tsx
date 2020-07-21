import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type Props = LayoutProps

export const Spacer = forwardRef((props: Props, ref: any) => {
  const { as: Tag = 'div', style: userStyles = {}, children, ...rest } = props

  const style = {
    flex: '1 1 0%',
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
