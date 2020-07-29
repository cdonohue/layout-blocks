import React from 'react'

import { Grid, GridItem } from '.'

export default {
  component: Grid,
  title: 'Grid',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Defaults = () => {
  return (
    <Grid>
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
    </Grid>
  )
}

export const WithColumns = () => {
  return (
    <Grid columns="2">
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
    </Grid>
  )
}

export const WithColumnsAndRows = () => {
  return (
    <Grid columns="2" rows="2">
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-500 p-4">Hipster</div>
    </Grid>
  )
}

export const SpanningItems = () => {
  return (
    <Grid columns="4" rows="4">
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <GridItem spanX="2" spanY="2" className="bg-gray-400 p-4">
        Hipster
      </GridItem>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      <div className="bg-gray-500 p-4">Hipster</div>
    </Grid>
  )
}
