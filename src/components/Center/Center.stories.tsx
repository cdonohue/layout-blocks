import React from 'react'

import { Center } from '.'
import { Box } from '../Box'

export default {
  component: Center,
  title: 'Center',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const CenterDefaults = () => {
  return (
    <Box className="bg-orange-200">
      <Center className="bg-orange-400" padding={4}>
        Consectetur elementum hendrerit aptent velit sed praesent a inceptos,
        donec in tincidunt maecenas sodales sem vehicula sit volutpat, integer
        pharetra tempor non phasellus netus amet. Nulla porttitor malesuada cras
        per lobortis est quam, ultrices lorem magna rhoncus pellentesque primis
        accumsan magnis, amet tincidunt blandit suspendisse maecenas potenti.
        Egestas pellentesque litora proin lobortis nibh gravida etiam
        ullamcorper ultricies, risus feugiat vulputate et arcu ex consectetur id
        erat, mus quam dapibus porta congue faucibus imperdiet est. Aptent hac
        ullamcorper finibus nec elit venenatis velit curae, montes suscipit
        convallis fames penatibus potenti morbi habitant, vulputate tortor
        nascetur at urna phasellus sagittis. At faucibus orci nam dapibus id
        sagittis mauris, condimentum porta ex morbi ipsum donec etiam, auctor
        varius suscipit laoreet maximus natoque. Nisl egestas venenatis posuere
        rutrum odio vitae in non blandit, mauris curae congue sociosqu justo
        quisque tempor leo class inceptos, quam cursus vulputate sit penatibus
        consectetur tellus varius. Per rhoncus phasellus nulla sagittis dapibus
        mauris egestas ipsum posuere integer ullamcorper nibh lobortis,
        venenatis pulvinar vulputate himenaeos fusce sit magna consequat ex
        sapien sed purus.
      </Center>
    </Box>
  )
}
