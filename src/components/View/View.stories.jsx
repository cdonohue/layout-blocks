import React from 'react'

import { View } from '../../../dist'

export default {
  title: 'Layout/View',
  component: View,
  argTypes: {
    padding: { control: 'text' },
    color: { control: 'text' },
    backgroundColor: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
}

const Template = args => <View {...args}>Some text</View>

export const Default = Template.bind({})
export const WidthAndHeight = Template.bind({})
WidthAndHeight.args = {
  width: '800px',
  height: '600px',
  padding: '4rem',
}
