import React, { forwardRef } from 'react'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutClassname from '../../utils/createLayoutClassname'
import enhancePropsWithClassname from '../../utils/enhancePropsWithClassname'
import { LayoutProps } from '../../types'

type Props = LayoutProps

export const Screen = forwardRef((props: Props, ref: any) => {
  const { as: Tag = 'div', layoutName = 'screen', children, ...rest } = props

  const styles = `
    & {
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
