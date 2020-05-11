import React from 'react'

import { Scroll } from '.'
import { Cover } from '../Cover'

export default {
  component: Scroll,
  title: 'Scroll',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return (
    <Cover>
      <Scroll>
        <Cover className="bg-blue-400 p-4">Thing</Cover>
        <Cover className="bg-red-400 p-4">Thing</Cover>
        <Cover className="bg-yellow-400 p-4">Thing</Cover>
        <Cover className="bg-green-400 p-4">Thing</Cover>
        <Cover className="bg-pink-400 p-4">Thing</Cover>
        <Cover className="bg-teal-400 p-4">Thing</Cover>
        <Cover className="bg-indigo-400 p-4">Thing</Cover>
      </Scroll>
    </Cover>
  )
}
