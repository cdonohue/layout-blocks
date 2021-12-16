import React from 'react'

import { VStack, View, Frame } from '../../../dist'

export default {
  title: 'Layout/VStack',
  component: VStack,
  argTypes: Object.entries(supportedValues).reduce((memo, [key, options]) => {
    memo[key] = {
      options: Object.keys(options),
    }

    return memo
  }, {}),
}

const Template = args => (
  <VStack
    spacing="var(--size-3)"
    padding="var(--size-3)"
    borderWidth="var(--border-size-2)"
    {...args}
  >
    <View padding="var(--size-3)" borderWidth="var(--border-size-2)" />
    <View padding="var(--size-3)" borderWidth="var(--border-size-2)" />
    <View padding="var(--size-3)" borderWidth="var(--border-size-2)" />
    <View padding="var(--size-3)" borderWidth="var(--border-size-2)" />
  </VStack>
)

const Card = args => (
  <VStack alignment="leading" padding="24px" {...args}>
    <h2>Card Heading</h2>
    <Frame>
      <img src="https://images.unsplash.com/photo-1585406430548-9138265a31ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80" />
    </Frame>
    <p>
      Slow-carb copper mug sartorial put a bird on it single-origin coffee
      austin pork belly etsy shoreditch tousled seitan. Waistcoat art party man
      bun intelligentsia banjo. Cold-pressed plaid hella leggings snackwave DIY
      echo park man braid synth palo santo tilde. Brunch literally green juice
      +1. Try-hard vexillologist etsy enamel pin.
    </p>
  </VStack>
)

export const Default = Template.bind({})

export const Leading = Template.bind({})
Leading.args = {
  alignment: 'leading',
}

export const Trailing = Template.bind({})
Trailing.args = {
  alignment: 'trailing',
}

export const CardLayout = Card.bind({})
CardLayout.args = {
  alignment: 'leading',
}
