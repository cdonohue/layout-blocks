import React from 'react'

import { Grid } from './Grid'
import Frame from '../Frame'
import VStack from '../VStack'
import Cluster from '../Cluster'
import Center from '../Center'
import Flex from '../Flex'

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {},
}

const Template = (args) => (
  <Grid {...args}>
    <div style={{ backgroundColor: 'var(--blue-4)', padding: '1rem' }}>
      Some words
    </div>
    <div style={{ backgroundColor: 'var(--green-4)', padding: '1rem' }}>
      Some words
    </div>
    <div style={{ backgroundColor: 'var(--red-4)', padding: '1rem' }}>
      Some words
    </div>
    <div style={{ backgroundColor: 'var(--orange-4)', padding: '1rem' }}>
      Some words
    </div>
    <div style={{ backgroundColor: 'var(--yellow-4)', padding: '1rem' }}>
      Some words
    </div>
  </Grid>
)

const Button = ({ primary = false, children }) => (
  <button
    style={{
      backgroundColor: primary ? 'var(--indigo-8)' : 'white',
      color: !primary ? 'var(--indigo-8)' : 'white',
      boxShadow: 'var(--shadow-2)',
      borderRadius: 'var(--radius-2)',
      border: 'none',
      fontSize: 'var(--font-size-3)',
      paddingInline: 'var(--size-8)',
      paddingBlock: 'var(--size-3)',
    }}
  >
    {children}
  </button>
)

const Hero = () => (
  <Flex style={{ background: 'var(--grape-0)' }}>
    <Center gutter="var(--size-10)">
      <VStack spacing="var(--size-3)" align="flex-start">
        <h1
          style={{
            color: 'var(--gray-9)',
            lineHeight: 'var(--font-lineheight-0)',
          }}
        >
          <div>Hero layout with</div>
          <div style={{ color: 'var(--indigo-7)' }}>Open Props</div>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetu adipisicing elit. Nemo in
          doloremque quam, voluptatibus eum voluptatum.
        </p>
        <Cluster>
          <Button primary>Get started</Button>
          <Button>Live demo</Button>
        </Cluster>
      </VStack>
    </Center>
    <img src="https://doodleipsum.com/700x700/outline?bg=3b5bdb" />
  </Flex>
)

export const Default = Template.bind({})
Default.args = {}

export const HeroLayout = Hero.bind({})
HeroLayout.args = {}
