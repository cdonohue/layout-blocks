import * as React from 'react'
import Flex from '../Flex'
import styles from './HStack.module.css'

export const supportedValues = {
  alignment: {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  },
}

export const HStack = React.forwardRef(
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
      '--layout-hstack--spacing': spacing,
    }

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.hstack} ${className}`.trim(),
      style,
    }

    return (
      <Flex
        direction="row"
        align={supportedValues.alignment[alignment]}
        {...sharedProps}
      >
        {children}
      </Flex>
    )
  }
)
