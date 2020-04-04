import React from 'react'

import { Switcher } from '.'
import { Box } from '../Box'

export default {
  component: Switcher,
  title: 'Switcher',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const SwitcherWithMaxOf4Items = () => {
  return (
    <Box padding={4}>
      <Switcher gap={4}>
        <Box padding={4} className="border-4">
          Box
        </Box>
        <Box padding={4} className="border-4">
          Box
        </Box>
        <Box padding={4} className="border-4">
          Box
        </Box>
        <Box padding={4} className="border-4">
          Box
        </Box>
        <Box padding={4} className="border-4">
          Box
        </Box>
      </Switcher>
    </Box>
  )
}
