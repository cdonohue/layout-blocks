import React from 'react'

import { Group } from '.'
import { Box } from '../Box'
import { Spacer } from '../Spacer'

export default {
  component: Group,
  title: 'Group',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const GroupDefaults = () => {
  return (
    <Box padding={4}>
      <Group>
        <Box padding={2} className="bg-teal-300">
          Ultricies
        </Box>
        <Box padding={2} className="bg-teal-500">
          Torquent
        </Box>
        <Box padding={2} className="bg-teal-700 text-white">
          Risus
        </Box>
        <Box padding={2} className="bg-teal-900 text-white">
          Ex
        </Box>
      </Group>
    </Box>
  )
}

export const GroupWithGap = () => {
  return (
    <Box padding={4}>
      <Group gap={4}>
        <Box padding={2} className="bg-teal-300">
          Ultricies
        </Box>
        <Box stretch padding={2} className="bg-teal-500">
          Torquent
        </Box>
        <Box padding={2} className="bg-teal-700 text-white">
          Risus
        </Box>
        <Box padding={2} className="bg-teal-900 text-white">
          Ex
        </Box>
      </Group>
    </Box>
  )
}

export const GroupWithGapJustifyEnd = () => {
  return (
    <Box padding={4}>
      <Group gap={4} justify="end">
        <Box padding={2} className="bg-teal-300">
          Ultricies
        </Box>
        <Box padding={2} className="bg-teal-500">
          Torquent
        </Box>
        <Box padding={2} className="bg-teal-700 text-white">
          Risus
        </Box>
        <Box padding={2} className="bg-teal-900 text-white">
          Ex
        </Box>
      </Group>
    </Box>
  )
}

export const GroupWithGapJustifyCenter = () => {
  return (
    <Box padding={4}>
      <Group gap={4} justify="center">
        <Box padding={2} className="bg-teal-300">
          Ultricies
        </Box>
        <Box stretch padding={2} className="bg-teal-500">
          Torquent
        </Box>
        <Box padding={2} className="bg-teal-700 text-white">
          Risus
        </Box>
        <Box padding={2} className="bg-teal-900 text-white">
          Ex
        </Box>
      </Group>
    </Box>
  )
}
