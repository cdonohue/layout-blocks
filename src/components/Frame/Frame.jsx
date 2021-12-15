import * as React from 'react'
import View from '../View'
import styles from './Frame.module.css'

export const Frame = React.forwardRef(
  (
    {
      as: Tag = 'div',
      children,
      className = '',
      style: passedInStyles,
      ratio = '16:9',
      ...props
    },
    ref
  ) => {
    const [ratioWidth, ratioHeight] = ratio.split(/\/|:/)

    const style = {
      ...passedInStyles,
      '--layout-frame-ratio-width': ratioWidth,
      '--layout-frame-ratio-height': ratioHeight,
    }

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.frame} ${className}`.trim(),
      style,
    }

    return <View {...sharedProps}>{children}</View>
  }
)
