import * as React from 'react'
import styles from './View.module.css'

export const View = React.forwardRef(
  (
    {
      as: Tag = 'div',
      children,
      className = '',
      padding = '',
      paddingInline = '',
      paddingBlock = '',
      paddingTop = '0',
      paddingRight = '0',
      paddingBottom = '0',
      paddingLeft = '0',
      style: passedInStyles,
      ...props
    },
    ref
  ) => {
    if (paddingInline) {
      paddingLeft = paddingInline
      paddingRight = paddingInline
    }

    if (paddingBlock) {
      paddingTop = paddingBlock
      paddingBottom = paddingBlock
    }

    if (padding) {
      paddingLeft = padding
      paddingRight = padding
      paddingTop = padding
      paddingBottom = padding
    }

    const style = {
      ...passedInStyles,
      '--layout-padding-top': paddingTop,
      '--layout-padding-right': paddingRight,
      '--layout-padding-bottom': paddingBottom,
      '--layout-padding-left': paddingLeft,
    }

    const sharedProps = {
      ...props,
      ref,
      className: `${styles.view} ${className}`.trim(),
      style,
    }

    return <Tag {...sharedProps}>{children}</Tag>
  }
)
