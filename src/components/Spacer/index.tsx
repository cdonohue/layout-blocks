import React, { forwardRef } from 'react'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutClassname from '../../utils/createLayoutClassname'
import enhancePropsWithClassname from '../../utils/enhancePropsWithClassname'
import { LayoutProps } from '../../types'

type Props = LayoutProps

export const Spacer = forwardRef((props: Props, ref: any) => {
  const { as: Tag = 'div', layoutName = 'spacer', children, ...rest } = props

  const styles = `
    & {
      flex-grow: 999;
    }
  `

  const layoutClass = createLayoutClassname(layoutName, styles)
  const selector = `${Tag}.${layoutClass}`
  return (
    <>
      {createStyleTag(styles.replace(/&/g, selector))}
      <Tag {...enhancePropsWithClassname({ ...rest, ref }, layoutClass)}>
        {children}
      </Tag>
    </>
  )
})
