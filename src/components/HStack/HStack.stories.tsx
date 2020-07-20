import React from 'react'

import { HStack } from '.'
import { Spacer } from '../Spacer'
import { Screen } from '../Screen'

export default {
  component: HStack,
  title: 'HStack',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Defaults = () => {
  return (
    <HStack>
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
    </HStack>
  )
}

export const AlignmentTop = () => {
  return (
    <HStack alignment="top">
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
    </HStack>
  )
}

export const AlignmentCenter = () => {
  return (
    <HStack alignment="center">
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
    </HStack>
  )
}

export const AlignmentBottom = () => {
  return (
    <HStack alignment="bottom">
      <div className="bg-gray-500 p-4">Hipster</div>
      <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
    </HStack>
  )
}

export const WithScreen = () => {
  return (
    <Screen className="bg-gray-200">
      <HStack>
        <div className="bg-gray-500 p-4">Hipster</div>
        <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      </HStack>
    </Screen>
  )
}

export const WithScreenAndSpacerLeft = () => {
  return (
    <Screen className="bg-gray-200">
      <HStack>
        <Spacer />
        <div className="bg-gray-500 p-4">Hipster</div>
        <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      </HStack>
    </Screen>
  )
}

export const WithScreenAndSpacerBetween = () => {
  return (
    <Screen className="bg-gray-200">
      <HStack>
        <div className="bg-gray-500 p-4">Hipster</div>
        <Spacer />
        <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
      </HStack>
    </Screen>
  )
}

export const WithScreenAndSpacerRight = () => {
  return (
    <Screen className="bg-gray-200">
      <HStack>
        <div className="bg-gray-500 p-4">Hipster</div>
        <div className="bg-gray-600 p-4">Scandinavian Old Fashioned</div>
        <Spacer />
      </HStack>
    </Screen>
  )
}
