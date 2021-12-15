import React from 'react'

import { Flex, supportedValues } from './Flex'

export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: Object.entries(supportedValues).reduce((memo, [key, options]) => {
    memo[key] = {
      options,
    }

    return memo
  }, {}),
}

const Template = (args) => (
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
