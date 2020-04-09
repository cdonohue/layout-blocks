import React, { FunctionComponent, useRef } from 'react'

import { Switch } from '.'
import { Box } from '../Box'
import { Stack } from '../Stack'
import useResizeObserver from '../../utils/useResizeObserver'

export default {
  component: Switch,
  title: 'Switch',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

// export const SwitchWithNoBreakpoints = () => (
//   <Switch>
//     <Box padding={4}>
//       I'll just render no matter what size this container is
//     </Box>
//   </Switch>
// )

// export const SwitchWithOneBreakpoint = () => (
//   <Switch
//     breakpoints={{
//       '500px': (
//         <Box padding={8} bgColor="gray.400" className="text-lg">
//           I'll render when the container gets to 500px
//         </Box>
//       ),
//     }}
//   >
//     <Box padding={4} className="text-sm">
//       I'll render by default
//     </Box>
//   </Switch>
// )

export const SwitchWithOneBreakpointWithinARow = () => (
  <Stack horizontal>
    <Box padding={4}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, saepe
      nisi officia aliquam soluta voluptates illo quia architecto ab excepturi?
      Eius reprehenderit dolore dignissimos quos dolores laborum error?
      Reprehenderit, voluptatibus!
    </Box>
    <Switch
      breakpoints={{
        '250px': (
          <Stack>
            <Box padding={4} bgColor="red.200">
              One
            </Box>
            <Stack horizontal>
              <Box stretch padding={4} bgColor="red.400">
                Two
              </Box>
              <Box stretch padding={4} bgColor="red.600">
                Three
              </Box>
            </Stack>
          </Stack>
        ),
        '60ch': (
          <Stack horizontal>
            <Box stretch padding={4} bgColor="red.200">
              One
            </Box>
            <Box stretch padding={4} bgColor="red.400">
              Two
            </Box>
            <Box stretch padding={4} bgColor="red.600">
              Three
            </Box>
          </Stack>
        ),
      }}
    >
      <Stack>
        <Box padding={4} bgColor="red.200">
          One
        </Box>
        <Box padding={4} bgColor="red.400">
          Two
        </Box>
        <Box padding={4} bgColor="red.600">
          Three
        </Box>
      </Stack>
    </Switch>
    <Box padding={4}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, saepe
      nisi officia aliquam soluta voluptates illo quia architecto ab excepturi?
      Eius reprehenderit dolore dignissimos quos dolores laborum error?
      Reprehenderit, voluptatibus!
    </Box>
  </Stack>
)

export const SwitchWithMultipleBreakpoints = () => {
  return (
    <Switch
      breakpoints={{
        '250px': (
          <Stack>
            <Box padding={4} bgColor="red.200">
              One
            </Box>
            <Stack horizontal>
              <Box stretch padding={4} bgColor="red.400">
                Two
              </Box>
              <Box stretch padding={4} bgColor="red.600">
                Three
              </Box>
            </Stack>
          </Stack>
        ),
        '60ch': (
          <Stack horizontal>
            <Box stretch padding={4} bgColor="red.200">
              One
            </Box>
            <Box stretch padding={4} bgColor="red.400">
              Two
            </Box>
            <Box stretch padding={4} bgColor="red.600">
              Three
            </Box>
          </Stack>
        ),
      }}
    >
      <Stack>
        <Box padding={4} bgColor="red.200">
          One
        </Box>
        <Box padding={4} bgColor="red.400">
          Two
        </Box>
        <Box padding={4} bgColor="red.600">
          Three
        </Box>
      </Stack>
    </Switch>
  )
}
