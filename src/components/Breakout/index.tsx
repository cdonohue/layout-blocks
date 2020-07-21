import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type Props = LayoutProps

export const Breakout = forwardRef((props: Props, ref: any) => {
  const { as: Tag = 'div', style: userStyles = {}, children, ...rest } = props

  const style = {
    width: '100vw',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
