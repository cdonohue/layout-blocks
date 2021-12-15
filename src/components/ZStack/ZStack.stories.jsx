import React from 'react'
import { useControls } from 'leva'

import { ZStack } from './ZStack'
import View from '../View'
import HStack from '../HStack'
import Spacer from '../Spacer'

export default {
  title: 'Layout/ZStack',
  component: ZStack,
  argTypes: {},
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

const Template = (args) => {
  const { initialSize, sizeMultiplier, numberOfItems, ...props } = useControls({
    reverse: false,
    alignment: 'center',
    offset: '0px',
    numberOfItems: {
      value: 4,
      min: 1,
      max: 20,
      step: 1,
    },
  })

  return (
    <HStack width="100%" alignment="top">
      <ZStack {...props}>
        {[...Array(numberOfItems).keys()].map((_, i) => (
          <View style={{ border: '1px solid rgba(0,0,0,.2)' }} />
        ))}
      </ZStack>
    </HStack>
  )
}

const CaptionTemplate = (args) => {
  return (
    <ZStack alignment="bottomLeading" offset="1rem">
      <View
        style={{
          height: '400px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1636964204923-ebb7558340b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)',
        }}
      />
      <View
        padding="1rem"
        style={{
          backgroundColor: 'var(--gray-5)',
          borderRadius: 'var(--radius-2)',
        }}
      >
        A Caption
      </View>
    </ZStack>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Caption = CaptionTemplate.bind({})
Caption.args = {}
