import React from 'react'

import { Cover, Position, Stack, Group, Box, Grid, Frame } from '../'
import { Play, SkipBack, Plus } from 'react-feather'

export default {
  title: 'Examples/DisneyPlus',
}

export const MovieLayout = () => (
  <Cover className="text-gray-200">
    <Position x="full" y="top" zIndex={-1}>
      <Frame overlay="linear-gradient(to bottom, rgba(0,0,0,.25), #1a1d29)">
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7813DA781956E27BEA861EF5AF506C8A29622171F117DE82E46C19254ED32B0C/scale?aspectRatio=1.78&format=jpeg" />
      </Frame>
    </Position>
    <Position
      zIndex={-2}
      x="full"
      y="full"
      styles={selector => `${selector} { background-color: #1a1d29; }`}
    />

    <Stack padding={8} paddingTop={32} gap={8}>
      <Grid min="300px">
        <Frame ratio="16:6">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA7B76D3464300228A4B5D049655643D2F2BAB7625A72DF9E167D36719F9D3C7/scale?width=1200&aspectRatio=1.78" />
        </Frame>
      </Grid>
      <Group gap={4} className="font-bold text-sm">
        <Stack
          align="center"
          inline
          as="button"
          gap={2}
          className="shadow-lg rounded bg-gray-100 text-gray-800 font-extrabold"
          paddingX={6}
          paddingY={3}
        >
          <Play />
          <span>RESUME</span>
        </Stack>
        <Stack
          inline
          align="center"
          gap={2}
          as="button"
          className="shadow-lg rounded bg-gray-900 text-gray-100"
          paddingX={6}
          paddingY={3}
        >
          <SkipBack />
          <span>RESTART</span>
        </Stack>
        <Box
          padding={2}
          className="shadow-lg rounded-full bg-gray-900"
          as="button"
        >
          <Plus />
        </Box>
      </Group>
      <Box maxWidth="67ch">
        While Thor fights to restore order across the cosmos, an ancient race
        led by vengeful Malekith returns to plunge the universe back into
        darkness. Setting out on his most dangerous and personal journey yet,
        Thor is forced into an alliance with the treacherous Loki to save his
        people and those he loves...and our universe itself.
      </Box>
      <Group gap={4} className="border-b border-gray-700">
        <Box paddingY={2} className="border-b-2">
          SUGGESTED
        </Box>
        <Box paddingY={2} className="border-b-2 border-transparent">
          EXTRAS
        </Box>
        <Box paddingY={2} className="border-b-2 border-transparent">
          DETAILS
        </Box>
      </Group>
      <Grid min="160px" gap={4}>
        <Frame>
          <img
            className="rounded shadow-xl"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FE355F8F546C6FA3E1F5027656BF4848B6E987994059B31B2832C06D6A6F5D2D/scale?width=1600&aspectRatio=1.78&format=jpeg
                "
          />
        </Frame>
        <Frame>
          <img
            className="rounded shadow-xl"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A2A22B9A33C8C1A6B70A54A7AF119B6C0BB1253688B0C36F3503DB832348D95B/scale?width=1600&aspectRatio=1.78&format=jpeg
                "
          />
        </Frame>
        <Frame>
          <img
            className="rounded shadow-xl"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/741F5230C8DC6C39EAA868675F56B519AAF540204114962C01ECD2609FE756F0/scale?width=1600&aspectRatio=1.78&format=jpeg
                "
          />
        </Frame>
        <Frame>
          <img
            className="rounded shadow-xl"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9020A7D9E3D1679D262C48E0995E8B4989E1A1A7F38706A7E6C92FE54FB4C433/scale?width=1600&aspectRatio=1.78&format=jpeg"
          />
        </Frame>
      </Grid>
    </Stack>
  </Cover>
)
