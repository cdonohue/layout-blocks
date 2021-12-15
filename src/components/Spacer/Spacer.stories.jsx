import React from 'react'

import { Spacer } from './Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
  argTypes: {}
}

const Template = (args) => (
  <Spacer {...args} />
)

export const Default = Template.bind({})
Default.args = {}

