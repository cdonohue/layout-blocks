import React from 'react'

import { Flex } from '../../../dist'

export default {
  title: 'Layout/Flex',
  component: Flex,
}

const Template = args => (
  <Flex {...args}>
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
  </Flex>
)

export const Row = Template.bind({})
Row.args = {
  direction: 'row',
}

export const Column = Template.bind({})
Column.args = {
  direction: 'column',
}
