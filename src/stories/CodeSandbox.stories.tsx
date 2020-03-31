import React, { FunctionComponent } from 'react'

import { Cover, Box, Spacer, Stack } from '../'

export default {
  title: 'Examples/CodeSandbox',
}

const Row: FunctionComponent = props => <Stack horizontal {...props} />
const Column: FunctionComponent = props => <Stack {...props} />

export const blank = () => {
  return (
    <Cover className="bg-black text-gray-600 text-xs">
      <Column>
        {/* 👇 Why do I have to wrap a Row in a Box? */}
        <Box padding={0}>
          {/* 👇 Missing Group */}
          <Row className="border-b border-gray-900 p-3">
            File Edit Selection
            <Spacer />
            React Template ❤️ 1371
            <Spacer />
            <span>Share</span>
            <span>Fork</span>
            <span>Create Sandbox</span>
            <span>🚦</span>
          </Row>
        </Box>

        {/* 👇 padding={0} should be the default */}
        <Box as="main" padding={0} stretch>
          <Row>
            {/* 👇 Gap scale should match Tailwind's https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale */}
            <Column className="border-r border-gray-900 p-4" gap={7}>
              <Box padding={0}>📦 </Box>
              <Box padding={0}>⚙︎</Box>
            </Column>

            <Box className="w-48" padding={0}>
              <Column className="border-r border-gray-900">
                <Box className="border-b border-gray-900 p-2" padding={0}>
                  ⌄ Files
                </Box>
                <Stack as="ol" className="p-2 font-mono" gap={3}>
                  <li>/dist</li>
                  <li>/src</li>
                  <li>package.json</li>
                </Stack>

                <Box
                  className="border-b border-t border-gray-900 p-2"
                  padding={0}
                >
                  ⌄ Dependencies
                </Box>
                <Stack as="ol" className="p-2 font-mono" gap={3}>
                  <li>react@16</li>
                  <li>react-dom@16</li>
                </Stack>
              </Column>
            </Box>

            <Box className="border-r border-gray-900" padding={0} stretch>
              <Stack>
                <Box className="p-2 border-b border-gray-900" padding={0}>
                  App.js
                </Box>
                <Box
                  as="pre"
                  className="p-2"
                >{`import React from "react"\n...`}</Box>
              </Stack>
            </Box>

            {/* 👇 Can I remove some of these extra Boxes? */}
            <Box padding={0} stretch>
              <Stack>
                <Box className="p-2 text-center text-gray-300" padding={0}>
                  Welcome to layout-blocks
                </Box>
                <Box className="p-1" padding={0}>
                  {/* 👇 Missing Group */}
                  <button>&lt;</button>
                  <button>&gt;</button>
                  <input
                    className="bg-gray-700 text-gray-100 px-1 py-px"
                    value="http://localhost:3000/"
                  />
                </Box>
                <Box className="bg-white text-center p-8" padding={0} stretch>
                  <h1 className="text-black text-4xl">
                    Welcome to Layout Blocks!
                  </h1>
                </Box>
              </Stack>
            </Box>
          </Row>
        </Box>
      </Column>
    </Cover>
  )
}
