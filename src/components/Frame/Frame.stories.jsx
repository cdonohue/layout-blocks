import React from 'react'

import { Frame } from './Frame'

export default {
  title: 'Layout/Frame',
  component: Frame,
  argTypes: {},
}

const Template = (args) => (
  <Frame {...args}>
    <img src="https://images.unsplash.com/photo-1585406430548-9138265a31ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80" />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}
