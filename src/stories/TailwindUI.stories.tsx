import React, { FunctionComponent } from 'react'

import { Cover, Box, Center, Spacer, Stack, Group } from '../'

export default {
  title: 'Examples/TailwindUI',
}

const Row: FunctionComponent = props => <Stack horizontal {...props} />
const Column: FunctionComponent = props => <Stack {...props} />
const Link: FunctionComponent = props => <Box as="a" {...props} />

export const HeroSection = () => (
  <Stack gap={4}>
    <Group gap={8} padding={4} fgColor="gray.600">
      <Link
        padding={3}
        bgColor="indigo.600"
        fgColor="white"
        className="rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      </Link>
      <a>Product</a>
      <a>Features</a>
      <a>Marketplace</a>
      <a>Company</a>
      <Link fgColor="indigo.600">Log In</Link>
    </Group>

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
        <Link
          padding-y={4}
          padding-x={10}
          className="rounded shadow bg-indigo-600 text-white"
        >
          Get Started
        </Link>
        <Link
          padding-y={4}
          padding-x={10}
          className="rounded bg-indigo-100 text-indigo-700"
        >
          Live Demo
        </Link>
      </Group>
    </Stack>
  </Stack>
)
