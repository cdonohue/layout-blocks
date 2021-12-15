import * as React from 'react'
import View from '../View'
import styles from './Grid.module.css'

export const Grid = React.forwardRef(
  (
    {
      as: Tag = 'div',
      children,
      className = '',
      spacing = '1rem',
      min = '250px',
      style: passedInStyles,
      ...props
    },
    ref
  ) => {
    const style = {
      ...passedInStyles,
      '--layout-grid-spacing': spacing,
      '--layout-grid-min-width': min,
    }

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.grid} ${className}`.trim(),
      style,
    }

    return <View {...sharedProps}>{children}</View>
  }
)
