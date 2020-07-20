import React, { forwardRef } from 'react'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutClassname from '../../utils/createLayoutClassname'
import enhancePropsWithClassname from '../../utils/enhancePropsWithClassname'
import { LayoutProps } from '../../types'

type HorizontalAlignment = 'leading' | 'center' | 'trailing' | 'stretch'

type Props = LayoutProps & {
  /** Horizontal alignment */
  alignment?: HorizontalAlignment
}

const keyToFlexLookup: Record<HorizontalAlignment, string> = {
  leading: 'flex-start',
  center: 'center',
  trailing: 'flex-end',
  stretch: 'stretch',
}

function translateToFlex(key: HorizontalAlignment): string {
  return keyToFlexLookup[key]
}

export const VStack = forwardRef((props: Props, ref: any) => {
  const {
    as: Tag = 'div',
    layoutName = 'vstack',
    alignment = 'stretch',
    children,
    ...rest
  } = props

  const styles = `
    & {
      display: flex;
      flex-direction: column;
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
