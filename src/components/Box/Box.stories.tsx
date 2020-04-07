import React from 'react'

import { Box } from '.'

export default {
  component: Box,
  title: 'Box',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const PlainBox = () => {
  return <Box className="bg-gray-200">I'm a box</Box>
}

export const PaddedBox = () => {
  return (
    <Box bgColor="gray.900" padding="24px">
      <Box
        bgColor="gray.500"
        padding={4}
        styles={selector => `
          ${selector} {
            border-radius: 8px;
          }
        `}
      >
        I'm a box inside of another box
      </Box>
    </Box>
  )
}

export const PaddedBoxFromTheme = () => {
  return (
    <Box className="bg-gray-200" padding={4}>
      I have padding based on the provided theme
    </Box>
  )
}
