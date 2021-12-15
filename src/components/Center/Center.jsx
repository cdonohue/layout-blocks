import * as React from 'react'
import View from '../View'
import Flex from '../Flex'
import styles from './Center.module.css'

export const Center = React.forwardRef(
  (
    {
      as: Tag = 'div',
      children,
      max,
      gutter = 0,
      centerChildren = false,
      className = '',
      style: passedInStyles,
      ...props
    },
    ref
  ) => {
    const style = {
      ...passedInStyles,
      '--layout-center-max-width': max,
    }

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.center} ${className}`.trim(),
      style,
      paddingInline: gutter,
    }

    return centerChildren ? (
      <Flex direction="column" align="center" {...sharedProps}>
        {children}
      </Flex>
    ) : (
      <View {...sharedProps}>{children}</View>
    )
  }
)
