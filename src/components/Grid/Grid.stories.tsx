import React from 'react'

import { Grid } from '.'

export default {
  component: Grid,
  title: 'Grid',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return (
    <Grid gap="1rem" min="320px">
      <div className="bg-blue-400 p-4">Thing</div>
      <div className="bg-red-400 p-4">Thing</div>
      <div className="bg-yellow-400 p-4">Thing</div>
      <div className="bg-green-400 p-4">Thing</div>
      <div className="bg-pink-400 p-4">Thing</div>
      <div className="bg-teal-400 p-4">Thing</div>
      <div className="bg-indigo-400 p-4">Thing</div>
    </Grid>
  )
}
