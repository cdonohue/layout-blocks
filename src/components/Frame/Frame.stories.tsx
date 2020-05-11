import React from 'react'

import { Frame } from '.'

export default {
  component: Frame,
  title: 'Frame',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return (
    <Frame>
      <img src="https://source.unsplash.com/NRQV-hBF10M" />
    </Frame>
  )
}

export const Squarish = () => {
  return (
    <Frame ratio="4:3">
      <img src="https://source.unsplash.com/NRQV-hBF10M" />
    </Frame>
  )
}
