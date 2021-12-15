import * as React from 'react'
import View from '../View'
import styles from './Flex.module.css'

export const supportedValues = {
  align: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
  direction: ['column', 'row'],
  justify: [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ],
}

export const Flex = React.forwardRef(
  (
    {
      align = 'center',
      as: Tag = 'div',
      children,
      className = '',
      direction = 'row',
      justify = 'center',
      style: passedInStyles,
      ...props
    },
    ref
  ) => {
    const style = {
      ...passedInStyles,
      '--layout-flex-align': align,
      '--layout-flex-direction': direction,
      '--layout-flex-justify': justify,
    }

    console.log(className)

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.flex} ${className}`.trim(),
      style,
    }

    return <View {...sharedProps}>{children}</View>
  }
)
