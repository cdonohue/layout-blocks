import React, { ReactNode } from 'react'

import useApi from '../../utils/useApi'
import createStyleTag from '../../utils/createStyleTag'
import createLayoutConfig from '../../utils/createLayoutConfig'

interface Props {
  /** Aspect ratio of element (Form of <width>:<height>) */
  ratio?: string
  children?: ReactNode
  /** HTML element to render */
  as?: keyof JSX.IntrinsicElements
}

const defaultApi = {
  ratio: '16:9',
}

const name = 'frame'

/**
 * Frame layout component
 */
export function Frame(props: Props) {
  const { api, children, Tag, passedProps, selector } = createLayoutConfig({
    contextApi: useApi(name),
    defaultApi,
    name,
    props,
  })

  const { ratio } = api

  const [denominator, numerator] = ratio.split(':')

  return (
    <>
      {createStyleTag`
        ${selector} {
          padding-bottom: calc(${Number(numerator)} / ${Number(
        denominator
      )} * 100%);
          position: relative;
        }
  
        ${selector} > * {
          overflow: hidden;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        ${selector} > img,
        ${selector} > video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}
      <Tag {...passedProps}>{children}</Tag>
    </>
  )
}
