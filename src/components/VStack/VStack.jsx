import * as React from 'react'
import Flex from '../Flex'
import styles from './VStack.module.css'

export const supportedValues = {
  alignment: {
    leading: 'flex-start',
    center: 'center',
    trailing: 'flex-end',
  },
}

export const VStack = React.forwardRef(
  (
    {
      alignment = 'center',
      as: Tag = 'div',
      children,
      className = '',
      spacing = '0',
      style: passedInStyles,
      ...props
    },
    ref
  ) => {
    const style = {
      ...passedInStyles,
      '--layout-vstack-spacing': spacing,
    }

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.vstack} ${className}`.trim(),
      style,
    }

    return (
      <Flex
        direction="column"
        align={supportedValues.alignment[alignment]}
        justify="center"
        {...sharedProps}
      >
        {children}
      </Flex>
    )
  }
)
