import React, { FunctionComponent } from 'react'

import { Cover, Box, Center, Spacer, Stack, Group } from '../'

export default {
  title: 'Examples/TailwindUI',
}

const Row: FunctionComponent = props => <Stack horizontal {...props} />
const Column: FunctionComponent = props => <Stack {...props} />

export const HeroSection = () => (
  <Stack gap={4}>
    <Row padding={4} className="text-gray-600">
      <Group gap={8}>
        <a className="bg-indigo-600 text-white p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </a>
        <a>Product</a>
        <a>Features</a>
        <a>Marketplace</a>
        <a>Company</a>
        <a className="text-indigo-600">Log In</a>
      </Group>
    </Row>
    <Stack padding={4} gap={6}>
      <h2 className="text-6xl font-extrabold leading-none tracking-tight">
        Data to enrich your{' '}
        <em className="text-indigo-600 not-italic">online business</em>
      </h2>
      <p className="text-gray-600 text-xl">
        Anim aute id magna aliqua ad ad non deserunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <Group gap={4}>
        <Box
          as="a"
          padding-y={4}
          padding-x={10}
          className="rounded shadow bg-indigo-600 text-white"
        >
          Get Started
        </Box>
        <Box
          as="a"
          padding-y={4}
          padding-x={10}
          className="rounded bg-indigo-100 text-indigo-700"
        >
          Live Demo
        </Box>
      </Group>
    </Stack>
  </Stack>
)
