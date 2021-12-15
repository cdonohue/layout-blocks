import * as React from 'react'
import View from '../View'
import styles from './Spacer.module.css'

export const Spacer = React.forwardRef(
  ({ as: Tag = 'div', children, className = '', ...props }, ref) => {
    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.spacer} ${className}`.trim(),
    }

    return <View {...sharedProps}>{children}</View>
  }
)
