import * as React from 'react'

import View from '../View'
import styles from './ZStack.module.css'

const alignmentTypes = {
  topLeading: 'topLeading',
  top: 'top',
  topTrailing: 'topTrailing',
  leading: 'leading',
  center: 'center',
  trailing: 'trailing',
  bottomLeading: 'bottomLeading',
  bottom: 'bottom',
  bottomTrailing: 'bottomTrailing',
}

const alignments = {
  [alignmentTypes.topLeading]: ['start', 'start'],
  [alignmentTypes.top]: ['start', 'center'],
  [alignmentTypes.topTrailing]: ['start', 'end'],
  [alignmentTypes.leading]: ['center', 'start'],
  [alignmentTypes.center]: ['center', 'center'],
  [alignmentTypes.trailing]: ['center', 'end'],
  [alignmentTypes.bottomLeading]: ['end', 'start'],
  [alignmentTypes.bottom]: ['end', 'center'],
  [alignmentTypes.bottomTrailing]: ['end', 'end'],
}

function getOffsetProperties(alignment) {
  switch (alignment) {
    case alignmentTypes.topLeading:
      return ['--layout-zstack-marginTop', '--layout-zstack-marginLeft']
    case alignmentTypes.top:
      return ['--layout-zstack-marginTop']
    case alignmentTypes.topTrailing:
      return ['--layout-zstack-marginTop', '--layout-zstack-marginRight']
    case alignmentTypes.leading:
      return ['--layout-zstack-marginLeft']
    case alignmentTypes.center:
      return []
    case alignmentTypes.trailing:
      return ['--layout-zstack-marginRight']
    case alignmentTypes.bottomLeading:
      return ['--layout-zstack-marginBottom', '--layout-zstack-marginLeft']
    case alignmentTypes.bottom:
      return ['--layout-zstack-marginBottom']
    case alignmentTypes.bottomTrailing:
      return ['--layout-zstack-marginBottom', '--layout-zstack-layout-zstack-marginRight']
  }
}

export const ZStack = React.forwardRef(
  (
    {
      alignment = 'center',
      as: Tag = 'div',
      offset = '0',
      reverse = false,
      children,
      className = '',
      style: passedInStyles,
      ...props
    },
    ref
  ) => {
    const [align, justify] = alignments[alignment]

    const childrenCount = React.Children.count(children)

    const style = {
      ...passedInStyles,
      '--layout-zstack-align': align,
      '--layout-zstack-justify': justify,
    }

    const sharedProps = {
      ...props,
      ref,
      as: Tag,
      className: `${styles.zstack} ${className}`.trim(),
      style,
    }

    return (
      <View {...sharedProps}>
        {React.Children.toArray(children).map((view, index) => {
          const zIndex = reverse ? childrenCount - index - 1 : index
          const layer = index
          const { props } = view

          const offsetProperties = getOffsetProperties(alignment).reduce(
            (memo, prop) => {
              memo[prop] = offset
              return memo
            },
            {}
          )

          const viewProps = {
            ...props,
            style: {
              ...props.style,
              ...offsetProperties,
              '--layout-zstack-layer': layer,
              '--layout-zstack-zIndex': props.zIndex || zIndex,
            },
          }
          return React.cloneElement(view, viewProps)
        })}
      </View>
    )
  }
)
