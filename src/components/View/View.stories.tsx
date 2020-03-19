import React from 'react'

import { View } from '.'

export default {
  component: View,
  title: 'View',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Vertical = () => {
  return (
    <View className="h-screen">
      <View size="auto" className="p-4 bg-blue-500">
        Auto sized
      </View>
      <View className="p-4 bg-blue-400">Stretch</View>
      <View className="p-4 bg-blue-700">Stretch</View>
    </View>
  )
}

export const Horizontal = () => {
  return (
    <View horizontal>
      <View size="auto" className="p-4 bg-blue-500">
        Auto sized
      </View>
      <View className="p-4 bg-blue-400">Stretch</View>
      <View className="p-4 bg-blue-700">Stretch</View>
    </View>
  )
}
