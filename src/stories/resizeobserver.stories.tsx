import React from 'react'

import useResizeObserver from '../utils/useResizeObserver'
import { useRefWidth } from '../utils/useRefWidth'
import styled from '../utils/styled'
import { Grid, Stack, Cluster } from '../'
import { Check, X } from 'react-feather'

export default {
  title: 'ResizeObserver',
}

const Thing = styled.div`
  & {
    padding: 1rem;
    border-radius: 0.4rem;
    background-color: ${({ isMd = false }) => (isMd ? 'pink' : 'whitesmoke')};
  }
`

const SizedBox = () => {
  const { ref, width, height } = useResizeObserver()
  return (
    <Thing ref={ref}>
      <div>width: {width}px</div>
      <div>height: {height}px</div>
    </Thing>
  )
}

export const ObservingSize = () => <SizedBox />

export const WithinAGrid = () => (
  <Grid gap=".5rem" className="p-2">
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
    <SizedBox />
  </Grid>
)

export const WithContainerWidth = () => {
  const widthToWatch = '30rem'
  const [ref, isMd] = useRefWidth(widthToWatch)
  return (
    <Thing ref={ref} isMd={isMd}>
      I change colors at {widthToWatch}
    </Thing>
  )
}

const BreakpointBox = () => {
  const widthsToWatch = ['10rem', '20rem', '67ch', '1200px']

  const [stackRef, ...isGreaterThanBreakpoint] = useRefWidth(...widthsToWatch)

  return (
    <Stack
      ref={stackRef}
      className="p-4 font-mono bg-gray-100 border"
      gap="1rem"
    >
      {widthsToWatch.map((width, i) => (
        <Cluster
          align="center"
          gap=".5rem"
          className={`p-2 rounded ${
            isGreaterThanBreakpoint[i]
              ? 'bg-green-500 text-white'
              : 'bg-red-200'
          }`}
        >
          <div
            className={`p-2 rounded-full ${
              isGreaterThanBreakpoint[i]
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {isGreaterThanBreakpoint[i] ? <Check /> : <X />}
          </div>
          <div>{width}</div>
        </Cluster>
      ))}
    </Stack>
  )
}

export const ShowingBreakpoints = () => {
  const [containerRef, isWide] = useRefWidth('960px')

  return (
    <div ref={containerRef}>
      {isWide ? (
        <Stack inline className="h-screen">
          <div className="w-48 p-4">
            <BreakpointBox />
          </div>
          <div className="flex-grow p-4">
            <BreakpointBox />
          </div>
        </Stack>
      ) : (
        <Stack>
          <div className="p-2">
            <BreakpointBox />
          </div>
        </Stack>
      )}
    </div>
  )
}

export const ConditionalLayouts = () => {
  const widthToWatch = '30rem'
  const [ref, is30rem] = useRefWidth(widthToWatch)

  return (
    <div ref={ref}>
      {is30rem ? (
        <Stack inline className="h-screen">
          <div className="p-4 bg-gray-700 w-48 text-gray-100">Nav</div>
          <div className="p-4 bg-gray-200 flex-grow">Content</div>
        </Stack>
      ) : (
        <Stack>
          <div className="p-2 bg-gray-700 text-gray-100">Nav</div>
          <div className="p-2 bg-gray-200 flex-grow">Content</div>
        </Stack>
      )}
    </div>
  )
}
