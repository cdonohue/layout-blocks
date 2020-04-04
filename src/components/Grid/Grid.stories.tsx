import React from 'react'

import { Grid } from '.'
import { Box } from '../Box'
import { Stack } from '../Stack'
import { Group } from '../Group'
import { Frame } from '../Frame'

export default {
  component: Grid,
  title: 'Grid',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Button = (props: any) => <Box as="button" {...props} />

const Card = () => (
  <Box className="shadow-xl rounded overflow-hidden">
    <Stack>
      <Frame>
        <img
          src="https://images.unsplash.com/photo-1584284160538-216efe4e9269?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt=""
        />
      </Frame>
      <Box padding={4}>
        Commodo maximus rutrum congue sollicitudin molestie lorem cursus litora
        turpis feugiat porta convallis hendrerit primis.
      </Box>
      <Box padding={4} className="border-t">
        <Group gap={4}>
          <Button stretch padding={2} className="border-4">
            Himenaeos
          </Button>
          <Button
            stretch
            padding={2}
            className="bg-gray-800 text-white border-4"
          >
            Finibus
          </Button>
        </Group>
      </Box>
    </Stack>
  </Box>
)

export const GridDefaults = () => {
  return (
    <Grid padding={4} gap={4}>
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
    </Grid>
  )
}

export const GridWithGap = () => {
  return (
    <Grid padding={4} gap={4}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  )
}
