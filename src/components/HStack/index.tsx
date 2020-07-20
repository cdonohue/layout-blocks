import React, { forwardRef } from 'react'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutClassname from '../../utils/createLayoutClassname'
import enhancePropsWithClassname from '../../utils/enhancePropsWithClassname'
import { LayoutProps } from '../../types'

type VerticalAlignment = 'top' | 'center' | 'bottom' | 'stretch'

type Props = LayoutProps & {
  /** Vertical alignment */
  alignment?: VerticalAlignment
}

const keyToFlexLookup: Record<VerticalAlignment, string> = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  stretch: 'stretch',
}

function translateToFlex(key: VerticalAlignment): string {
  return keyToFlexLookup[key]
}

export const HStack = forwardRef((props: Props, ref: any) => {
  const {
    as: Tag = 'div',
    layoutName = 'hstack',
    alignment = 'stretch',
    children,
    ...rest
  } = props

  const styles = `
    & {
      display: flex;
      flex-direction: row;
      align-items: ${translateToFlex(alignment)};
      justify-content: center;
      min-height: 100%;
      min-width: 100%;
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
