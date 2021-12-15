import * as React from 'react'
import styles from './Cluster.module.css'
import Flex from '../Flex'

export const Cluster = React.forwardRef(
  (
    {
      align = 'center',
      justify = 'flex-start',
      as: Tag = 'div',
      children,
      className = '',
      spacing = '1rem',
      style: passedInStyles,
      ...props
    },
    ref
  ) => {
    const style = {
      ...passedInStyles,
      '--layout-cluster-spacing': spacing,
    }

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.cluster} ${className}`.trim(),
      style,
    }

    return (
      <Flex direction="row" align={align} justify={justify} {...sharedProps}>
        {children}
      </Flex>
    )
  }
)
