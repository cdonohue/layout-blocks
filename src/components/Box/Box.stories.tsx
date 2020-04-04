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
    <Box className="bg-gray-200" padding="24px">
      I have <code>24px</code> of padding
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
