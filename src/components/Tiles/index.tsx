import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type Props = LayoutProps & {
  min?: string
}

export const Tiles = forwardRef((props: Props, ref: any) => {
  const {
    as: Tag = 'div',
    min = '250px',
    style: userStyles = {},
    children,
    ...rest
  } = props

  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`,
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
