import React from 'react'

import { Position } from '.'
import { Box } from '../Box'
import { Spacer } from '../Spacer'

export default {
  component: Position,
  title: 'Position',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const PositionDefaults = () => {
  return (
    <Box padding={4}>
      Lobortis conubia penatibus volutpat sit aptent viverra luctus class,
      montes ac quam arcu litora nibh vel, sociosqu placerat at habitant potenti
      rutrum etiam. Est nostra interdum lectus pulvinar ad non maecenas vel
      curabitur dictumst, donec vulputate pharetra praesent maximus gravida nisl
      dolor molestie. Ligula molestie porta lobortis sit augue lorem finibus
      ridiculus, pretium orci inceptos vehicula netus etiam cras, integer
      maecenas facilisi ac vel consequat pharetra. At nullam vel adipiscing quam
      lacinia auctor libero non, pretium porta class natoque justo accumsan erat
      tortor sem, mauris et maecenas dictum dapibus sollicitudin fames. Senectus
      lectus malesuada aptent consectetur lacinia commodo quam libero, accumsan
      ad pellentesque curabitur a ullamcorper praesent luctus nibh, bibendum
      magnis ac egestas turpis quis rhoncus. Volutpat libero ligula penatibus
      quis habitasse ante dui luctus mus, eget vivamus eu efficitur aliquet
      tortor taciti blandit ornare, parturient montes curae varius inceptos
      fames suscipit nisl. Natoque orci et dis ligula congue rutrum dapibus
      penatibus, nulla rhoncus vehicula id urna commodo lacinia, vitae feugiat
      quis eros luctus phasellus nullam.
      <Position className="bg-red-600 text-white rounded shadow-xl" padding={4}>
        Default position, centered within relative parent
      </Position>
    </Box>
  )
}

export const PositionTop = () => {
  return (
    <Box padding={4} className="bg-red-200">
      Lobortis conubia penatibus volutpat sit aptent viverra luctus class,
      montes ac quam arcu litora nibh vel, sociosqu placerat at habitant potenti
      rutrum etiam. Est nostra interdum lectus pulvinar ad non maecenas vel
      curabitur dictumst, donec vulputate pharetra praesent maximus gravida nisl
      dolor molestie. Ligula molestie porta lobortis sit augue lorem finibus
      ridiculus, pretium orci inceptos vehicula netus etiam cras, integer
      maecenas facilisi ac vel consequat pharetra. At nullam vel adipiscing quam
      lacinia auctor libero non, pretium porta class natoque justo accumsan erat
      tortor sem, mauris et maecenas dictum dapibus sollicitudin fames. Senectus
      lectus malesuada aptent consectetur lacinia commodo quam libero, accumsan
      ad pellentesque curabitur a ullamcorper praesent luctus nibh, bibendum
      magnis ac egestas turpis quis rhoncus. Volutpat libero ligula penatibus
      quis habitasse ante dui luctus mus, eget vivamus eu efficitur aliquet
      tortor taciti blandit ornare, parturient montes curae varius inceptos
      fames suscipit nisl. Natoque orci et dis ligula congue rutrum dapibus
      penatibus, nulla rhoncus vehicula id urna commodo lacinia, vitae feugiat
      quis eros luctus phasellus nullam.
      <Position
        x="full"
        y="top"
        gutter={8}
        className="bg-red-600 text-white rounded shadow-2xl"
        padding={4}
      >
        Some Alert
      </Position>
    </Box>
  )
}

export const PositionFixed = () => {
  return (
    <Box padding={4}>
      Lobortis conubia penatibus volutpat sit aptent viverra luctus class,
      montes ac quam arcu litora nibh vel, sociosqu placerat at habitant potenti
      rutrum etiam. Est nostra interdum lectus pulvinar ad non maecenas vel
      curabitur dictumst, donec vulputate pharetra praesent maximus gravida nisl
      dolor molestie. Ligula molestie porta lobortis sit augue lorem finibus
      ridiculus, pretium orci inceptos vehicula netus etiam cras, integer
      maecenas facilisi ac vel consequat pharetra. At nullam vel adipiscing quam
      lacinia auctor libero non, pretium porta class natoque justo accumsan erat
      tortor sem, mauris et maecenas dictum dapibus sollicitudin fames. Senectus
      lectus malesuada aptent consectetur lacinia commodo quam libero, accumsan
      ad pellentesque curabitur a ullamcorper praesent luctus nibh, bibendum
      magnis ac egestas turpis quis rhoncus. Volutpat libero ligula penatibus
      quis habitasse ante dui luctus mus, eget vivamus eu efficitur aliquet
      tortor taciti blandit ornare, parturient montes curae varius inceptos
      fames suscipit nisl. Natoque orci et dis ligula congue rutrum dapibus
      penatibus, nulla rhoncus vehicula id urna commodo lacinia, vitae feugiat
      quis eros luctus phasellus nullam.
      <Position
        x="full"
        y="bottom"
        gutter={4}
        fixed
        className="bg-blue-600 text-white rounded shadow-xl"
        padding={4}
      >
        Some Alert
      </Position>
    </Box>
  )
}
