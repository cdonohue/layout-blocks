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
      borderRadius = '0',
      borderColor = 'black',
      borderStyle = 'solid',
      borderWidth = '0',
      shadow = 'none',
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
      '--layout-border-radius': borderRadius,
      '--layout-border-color': borderColor,
      '--layout-border-style': borderStyle,
      '--layout-border-width': borderWidth,
      '--layout-shadow': shadow,
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
