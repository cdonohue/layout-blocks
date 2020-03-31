import React from 'react'

import { Stack } from '.'
import { Box } from '../Box'
import { Cover } from '../Cover'

export default {
  component: Stack,
  title: 'Stack',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Vertical = () => {
  return (
    <Stack gap={6} className="bg-orange-200">
      <Box className="bg-gray-200">One</Box>
      <Box className="bg-gray-300">Two</Box>
      <Box className="bg-gray-400">Three</Box>
    </Stack>
  )
}

export const VerticalNegativeMargin = () => {
  return (
    <Stack gap="-1rem">
      <Box className="bg-gray-200">One</Box>
      <Box className="bg-gray-300">Two</Box>
      <Box className="bg-gray-400">Three</Box>
    </Stack>
  )
}

export const Horizontal = () => {
  return (
    <Stack horizontal>
      <Box className="bg-gray-200">One</Box>
      <Box stretch className="bg-gray-300">
        Two
      </Box>
      <Box className="bg-gray-400">Three</Box>
    </Stack>
  )
}

export const HorizontalNegativeMargin = () => {
  return (
    <Stack horizontal gap="-1rem">
      <Box className="bg-gray-200 shadow-xl">One</Box>
      <Box className="bg-gray-300 shadow-xl">Two</Box>
      <Box className="bg-gray-400 shadow-xl">Three</Box>
    </Stack>
  )
}

export const CoverWithAStack = () => {
  return (
    <Cover className="bg-gray-700">
      <Box>
        <Stack>
          <Box className="bg-gray-200 shadow-xl">One</Box>
          <Box stretch className="bg-gray-400 shadow-xl">
            Two
          </Box>
          <Box className="bg-gray-600 text-gray-100 shadow-xl">Three</Box>
        </Stack>
      </Box>
    </Cover>
  )
}

export const ComplexNestedStacks = () => {
  return (
    <>
      <Cover>
        <Stack horizontal>
          <Box padding="1rem" className="bg-gray-200 shadow-xl">
            Side
          </Box>
          <Box padding="1rem" stretch className="bg-gray-400 shadow-xl">
            Main
          </Box>
          <Box padding="1rem" size="20rem" className="bg-gray-600 shadow-xl">
            <Stack space="1rem">
              <Box padding="1rem" className="bg-gray-100">
                Three
              </Box>
              <Box padding="1rem" stretch className="bg-gray-100">
                Four
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Cover>
      <Box padding="1rem" className="bg-orange-300">
        <p>
          Tempor tortor metus tellus condimentum fringilla diam pulvinar aptent
          quis nunc mus suspendisse, integer purus gravida aliquam commodo
          sagittis vestibulum donec magnis sed.
        </p>
      </Box>
    </>
  )
}
