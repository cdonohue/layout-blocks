import React, { forwardRef } from 'react'
import { LayoutProps } from '../../types'

type GridProps = LayoutProps & {
  columns?: string
  rows?: string
  min?: string
}

type GridItemProps = LayoutProps & {
  spanX?: string
  spanY?: string
}

export const Grid = forwardRef((props: GridProps, ref: any) => {
  const {
    as: Tag = 'div',
    columns = '1',
    rows = '1',
    style: userStyles = {},
    children,
    ...rest
  } = props

  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr '.repeat(parseInt(columns)).trim(),
    gridTemplateRows: '1fr '.repeat(parseInt(rows)).trim(),
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})

export const GridItem = forwardRef((props: GridItemProps, ref: any) => {
  const {
    as: Tag = 'div',
    spanX = '1',
    spanY = '1',
    style: userStyles = {},
    children,
    ...rest
  } = props

  const style = {
    gridColumn: `span ${parseInt(spanX)}`,
    gridRow: `span ${parseInt(spanX)}`,
    ...userStyles,
  }

  return <Tag {...{ ...rest, ref, style }}>{children}</Tag>
})
