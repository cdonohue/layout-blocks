import { ReactNode } from 'react'

export type LayoutProps = {
  children?: ReactNode
  /** HTML element to render */
  as?: any
  className?: string
  layoutName?: string
}
