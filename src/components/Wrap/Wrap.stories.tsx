import React from 'react'

import { Wrap } from '.'
import { Box } from '../Box'
import { Cover } from '../Cover'

export default {
  component: Wrap,
  title: 'Wrap',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Vertical = () => {
  return (
    <Wrap threshold="200px" className="bg-gray-200" padding={4} gap={4}>
      <Box className="bg-blue-400" padding={4}>
        Side
      </Box>
      <Box stretch className="bg-teal-300" padding={4}>
        Content
      </Box>
    </Wrap>
  )
}
