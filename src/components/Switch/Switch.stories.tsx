import React from 'react'

import { Switch } from '.'
import { Box } from '../Box'

export default {
  component: Switch,
  title: 'Switch',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const SwitchWithMultipleBreakpoints = () => {
  return (
    <Switch
      breakpoints={{
        '250px': (
          <Box padding={4} bgColor="blue.400">
            I should be blue
          </Box>
        ),
        '60ch': (
          <Box padding={4} bgColor="purple.400">
            I should be purple
          </Box>
        ),
      }}
    >
      <Box padding={4} bgColor="red.400">
        I should be red
      </Box>
    </Switch>
  )
}
