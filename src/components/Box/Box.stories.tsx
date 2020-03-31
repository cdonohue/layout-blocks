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
