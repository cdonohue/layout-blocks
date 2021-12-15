import React from 'react'
import { gray } from '@radix-ui/colors'

import { HStack, supportedValues } from './HStack'
import View from '../View'

export default {
  title: 'Layout/HStack',
  component: HStack,
  argTypes: Object.entries(supportedValues).reduce((memo, [key, options]) => {
    memo[key] = {
      options: Object.keys(options),
    }

    return memo
  }, {}),
}

const Template = (args) => (
  <HStack padding="24px" backgroundColor={gray.gray2} {...args}>
    <View padding="12px" backgroundColor={gray.gray5}>
      One
    </View>
    <View padding="12px" backgroundColor={gray.gray6}>
      A lot of text to show
    </View>
    <View padding="12px" backgroundColor={gray.gray7}>
      Slow-carb copper mug sartorial put a bird on it single-origin coffee
      austin pork belly etsy shoreditch tousled seitan. Waistcoat art party man
      bun intelligentsia banjo. Cold-pressed plaid hella leggings snackwave DIY
      echo park man braid synth palo santo tilde. Brunch literally green juice
      +1. Try-hard vexillologist etsy enamel pin.
    </View>
    <View padding="12px" backgroundColor={gray.gray8}>
      Four
    </View>
  </HStack>
)

export const Default = Template.bind({})

export const WithSpacing = Template.bind({})
WithSpacing.args = {
  spacing: '24px',
}

export const Top = Template.bind({})
Top.args = {
  alignment: 'top',
}

export const Bottom = Template.bind({})
Bottom.args = {
  alignment: 'bottom',
}
