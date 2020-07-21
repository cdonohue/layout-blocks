import React from 'react'

import { VStack } from '.'
import { Spacer } from '../Spacer'
import { Screen } from '../Screen'

export default {
  component: VStack,
  title: 'VStack',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Defaults = () => {
  return (
    <VStack>
      <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>

      <div className="bg-gray-600 p-4">
        Quality of life tote bag espresso wardrobe
      </div>
    </VStack>
  )
}

export const AlignmentLeading = () => {
  return (
    <VStack alignment="leading">
      <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>
      <div className="bg-gray-600 p-4">
        Quality of life tote bag espresso wardrobe
      </div>
    </VStack>
  )
}

export const AlignmentCenter = () => {
  return (
    <VStack alignment="center">
      <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>
      <div className="bg-gray-600 p-4">
        Quality of life tote bag espresso wardrobe
      </div>
    </VStack>
  )
}

export const AlignmentTrailing = () => {
  return (
    <VStack alignment="trailing">
      <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>
      <div className="bg-gray-600 p-4">
        Quality of life tote bag espresso wardrobe
      </div>
    </VStack>
  )
}

export const WithScreen = () => {
  return (
    <Screen className="bg-gray-200">
      <VStack>
        <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>
        <div className="bg-gray-600 p-4">
          Quality of life tote bag espresso wardrobe
        </div>
      </VStack>
    </Screen>
  )
}

export const WithScreenAndSpacerTop = () => {
  return (
    <Screen className="bg-gray-200">
      <VStack className="h-full">
        <Spacer />
        <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>
        <div className="bg-gray-600 p-4">
          Quality of life tote bag espresso wardrobe
        </div>
      </VStack>
    </Screen>
  )
}

export const WithScreenAndSpacerBetween = () => {
  return (
    <Screen className="bg-gray-200">
      <VStack className="h-full">
        <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>
        <Spacer />
        <div className="bg-gray-600 p-4">
          Quality of life tote bag espresso wardrobe
        </div>
      </VStack>
    </Screen>
  )
}

export const WithScreenAndSpacerBottom = () => {
  return (
    <Screen className="bg-gray-200">
      <VStack className="h-full">
        <div className="bg-gray-500 p-4">Exquisite Scandinavian</div>
        <div className="bg-gray-600 p-4">
          Quality of life tote bag espresso wardrobe
        </div>
        <Spacer />
      </VStack>
    </Screen>
  )
}
