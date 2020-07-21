import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type Props = LayoutProps

export const Screen = forwardRef((props: Props, ref: any) => {
  const { as: Tag = 'div', style: userStyles = {}, children, ...rest } = props

  const style = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
