import React, { forwardRef } from 'react'
import { Flex } from '../Flex'
import { LayoutProps } from '../../types'

type Props = LayoutProps

export const Spacer = forwardRef((props: Props, ref: any) => {
  return <Flex {...{ ...props, ref }} />
})
