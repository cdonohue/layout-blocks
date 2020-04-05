import React, { FunctionComponent } from 'react'

import { Cover, Box, Spacer, Stack, Group } from '../'

export default {
  title: 'Examples/CodeSandbox',
}

const Row: FunctionComponent = (props) => <Stack horizontal {...props} />
const Column: FunctionComponent = (props) => <Stack {...props} />

export const blank = () => {
  return (
    <Cover className="bg-black text-gray-600 text-xs">
      <Column>
        <Row className="border-b border-gray-900 p-3">
          <Group as="ul" gap={2}>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
          </Group>
          <Spacer />
          <Group as="ul" gap={2}>
            <li>React Template</li>
            <li>❤️ 1371</li>
          </Group>
          <Spacer />
          <Group as="ul" gap={2}>
            <li>Share</li>
            <li>Fork</li>
            <li>Create Sandbox</li>
            <li>🚦</li>
          </Group>
        </Row>
        <Row as="main" stretch>
          <Column className="border-r border-gray-900 p-4" gap={7}>
            <Box>📦</Box>
            <Box>⚙︎</Box>
          </Column>
          <Column className="w-48 border-r border-gray-900">
            <Box className="border-b border-gray-900 p-2">⌄ Files</Box>
            <Stack as="ol" className="p-2 font-mono" gap={3}>
              <li>/dist</li>
              <li>/src</li>
              <li>package.json</li>
            </Stack>
            <Box className="border-b border-t border-gray-900 p-2" padding={0}>
              ⌄ Dependencies
            </Box>
            <Stack as="ol" className="p-2 font-mono" gap={3}>
              <li>react@16</li>
              <li>react-dom@16</li>
            </Stack>
          </Column>
          <Stack stretch className="border-r border-gray-900">
            <Box className="border-b border-gray-900" padding={2}>
              App.js
            </Box>
            <Box
              as="pre"
              className="p-2"
            >{`import React from "react"\n...`}</Box>
          </Stack>
          <Stack stretch>
            <Box className="p-2 text-center text-gray-300" padding={0}>
              Welcome to layout-blocks
            </Box>
            <Group gap={2} padding={2}>
              <button>&lt;</button>
              <button>&gt;</button>
              <Box
                as="input"
                stretch
                className="bg-gray-700 text-gray-100 px-1 py-px"
                value="http://localhost:3000/"
              />
            </Group>
            <Box className="bg-white text-center p-8" padding={0} stretch>
              <h1 className="text-black text-4xl">Welcome to Layout Blocks!</h1>
            </Box>
          </Stack>
        </Row>
      </Column>
    </Cover>
  )
}
