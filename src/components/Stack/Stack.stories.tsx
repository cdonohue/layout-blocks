import React from 'react'

import { Stack } from '.'

export default {
  component: Stack,
  title: 'Stack',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Vertical = () => {
  return (
    <Stack gap={6} className="bg-orange-200">
      <div className="bg-gray-200">One</div>
      <div className="bg-gray-300">Two</div>
      <div className="bg-gray-400">Three</div>
    </Stack>
  )
}

export const VerticalNegativeMargin = () => {
  return (
    <Stack gap="-1rem">
      <div className="bg-gray-200">One</div>
      <div className="bg-gray-300">Two</div>
      <div className="bg-gray-400">Three</div>
    </Stack>
  )
}
