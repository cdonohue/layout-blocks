import React from 'react'

import { Cluster } from '.'

export default {
  component: Cluster,
  title: 'Cluster',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const ListOfPills = () => {
  return (
    <Cluster className="p-4" gap=".5rem">
      <div className="text-xs px-4 py-1 bg-gray-200 rounded-sm">action</div>
      <div className="text-xs px-4 py-1 bg-red-200 rounded-sm">adventure</div>
      <div className="text-xs px-4 py-1 bg-purple-200 rounded-sm">comedy</div>
      <div className="text-xs px-4 py-1 bg-pink-200 rounded-sm">sci-fi</div>
      <div className="text-xs px-4 py-1 bg-orange-200 rounded-sm">drama</div>
    </Cluster>
  )
}

export const StackedAvatars = () => {
  return (
    <Cluster gap="-1rem">
      <img
        className="border-4 border-white rounded-full h-24 w-24"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <img
        className="border-4 border-white rounded-full h-24 w-24"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <img
        className="border-4 border-white rounded-full h-24 w-24"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
      />
      <img
        className="border-4 border-white rounded-full h-24 w-24"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </Cluster>
  )
}
