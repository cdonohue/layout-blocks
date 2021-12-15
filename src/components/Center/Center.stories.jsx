import React from 'react'

import { Center } from './Center'

export default {
  title: 'Layout/Center',
  component: Center,
  argTypes: {},
}

const Template = (args) => (
  <Center gutter="1rem" centerChildren max="60ch" {...args}>
    <p
      style={{
        padding: '1rem',
        background: 'var(--yellow-2)',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>Lorem ipsum dolor sit amet</p>
  </Center>
)

export const Default = Template.bind({})
Default.args = {}
