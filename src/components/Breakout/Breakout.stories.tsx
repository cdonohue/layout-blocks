import React from 'react'

import { Breakout } from '.'
import { Center } from '../Center'
import { Stack } from '../Stack'

export default {
  component: Breakout,
  title: 'Breakout',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return (
    <Center>
      <Stack gap="1rem">
        <p>
          Magna pharetra sit vulputate curabitur sed sem vehicula commodo
          convallis, pretium eros rhoncus elementum quam proin facilisi laoreet
          egestas in, faucibus varius vel morbi class odio dignissim sagittis. A
          cursus rutrum velit vestibulum non elit dui vel libero nibh, sociosqu
          enim platea torquent suspendisse conubia urna nulla lorem. Mus commodo
          purus litora habitant sociosqu posuere vehicula odio nibh dictum,
          tristique natoque luctus condimentum massa sodales nam ultrices
          vivamus conubia, viverra est porttitor senectus ornare cubilia eu
          egestas aenean. Rutrum mi viverra auctor lorem nisi eros tortor, amet
          a eget class tellus aptent dapibus rhoncus, convallis vivamus mattis
          cursus faucibus dis.
        </p>
        <Breakout className="bg-blue-600 border-blue-700 border-t-2 border-b-2 text-white shadow-2xl p-4">
          <Center>
            Iaculis platea magnis pulvinar ornare dui semper nisi nascetur
            congue efficitur quis, mollis vel malesuada vitae auctor interdum
            pretium felis nullam nulla, litora vulputate aliquet integer magna
            consequat orci maximus varius convallis.
          </Center>
        </Breakout>
        <p>
          Lectus nibh faucibus conubia ipsum quisque id gravida proin placerat
          taciti, amet ullamcorper laoreet ut erat fringilla volutpat hendrerit
          curabitur, elit a interdum efficitur eleifend leo fermentum finibus
          ac. Iaculis aliquet lacus dui suscipit nibh vitae blandit condimentum
          nunc, eleifend natoque finibus placerat dolor mi rhoncus habitant,
          nullam sodales himenaeos orci aptent ligula massa fusce. Commodo arcu
          blandit malesuada eget rutrum nibh placerat massa netus, suscipit
          lacinia tincidunt tristique auctor vivamus ornare aptent, accumsan
          pellentesque quis sapien orci lorem vulputate viverra. Fermentum
          maecenas pretium justo nam ridiculus blandit faucibus proin massa
          purus ligula fusce libero cubilia mi, ullamcorper etiam vivamus dis
          odio dolor diam habitasse posuere facilisis laoreet gravida ipsum
          lorem. Non sagittis metus volutpat finibus maximus hac molestie massa
          mattis velit tempus cursus, vitae orci ad auctor in netus purus tortor
          sapien neque.
        </p>
      </Stack>
    </Center>
  )
}
