import React from 'react'

import { FluidContainer } from '.'
import { Box } from '../Box'

export default {
  component: FluidContainer,
  title: 'FluidContainer',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Vertical = () => {
  return (
    <FluidContainer className="h-screen">
      <Box className="bg-gray-500">Header</Box>
      <Box className="bg-gray-200">Content</Box>
    </FluidContainer>
  )
}

export const VerticalInverse = () => {
  return (
    <FluidContainer reverse className="h-screen">
      <Box className="bg-gray-500">Content</Box>
      <Box className="bg-gray-200">Header</Box>
    </FluidContainer>
  )
}

export const Horizontal = () => {
  return (
    <FluidContainer horizontal className="h-screen">
      <Box className="bg-gray-500">Header</Box>
      <Box className="bg-gray-200">Content</Box>
    </FluidContainer>
  )
}

export const HorizontalInverse = () => {
  return (
    <FluidContainer horizontal reverse className="h-screen">
      <Box className="bg-gray-500">Content</Box>
      <Box className="bg-gray-200">Header</Box>
    </FluidContainer>
  )
}

export const Nested = () => {
  return (
    <FluidContainer horizontal className="h-screen">
      <Box className="bg-gray-500">Header</Box>
      <FluidContainer className="h-screen">
        <Box className="bg-gray-400">Header</Box>
        <Box className="bg-gray-200">Content</Box>
      </FluidContainer>
    </FluidContainer>
  )
}

export const DoubleNested = () => {
  return (
    <FluidContainer horizontal className="h-screen">
      <Box className="bg-gray-500">Header</Box>
      <FluidContainer>
        <Box className="bg-gray-400">Header</Box>
        <FluidContainer reverse>
          <Box className="bg-gray-200 overflow-auto">
            Put a bird on it pinterest cornhole PBR&B asymmetrical. Subway tile
            vaporware next level, cardigan forage blue bottle mixtape taxidermy
            lumbersexual raclette cronut woke humblebrag stumptown. Helvetica
            umami drinking vinegar forage mlkshk tattooed +1 kinfolk ennui
            cliche. Tofu mixtape butcher, chia messenger bag etsy prism
            vaporware +1. Skateboard PBR&B chia, hot chicken irony adaptogen
            lomo migas listicle. Schlitz flannel you probably haven't heard of
            them semiotics, aesthetic tumeric lumbersexual photo booth PBR&B
            gochujang narwhal jean shorts. Vinyl meh distillery 8-bit swag.
            Brooklyn meditation fashion axe pok pok, thundercats whatever VHS
            tumeric unicorn 3 wolf moon pinterest franzen master cleanse
            mustache flexitarian. Before they sold out truffaut flannel raw
            denim sartorial knausgaard tattooed gluten-free snackwave actually
            adaptogen. Sartorial twee DIY helvetica franzen iceland. Subway tile
            ugh austin occupy mlkshk glossier. Slow-carb live-edge everyday
            carry, cornhole kogi bicycle rights four dollar toast kombucha
            chartreuse iceland skateboard lo-fi single-origin coffee blog.
            Meggings cold-pressed microdosing, deep v kickstarter shabby chic
            bespoke green juice swag pickled direct trade cliche shoreditch yr.
            Selfies photo booth man bun ramps, mustache vinyl quinoa narwhal
            shaman biodiesel pop-up subway tile health goth affogato. Meditation
            roof party disrupt street art selfies mustache fixie vape organic
            occupy ethical.
          </Box>
          <Box className="bg-gray-600">Footer</Box>
        </FluidContainer>
      </FluidContainer>
    </FluidContainer>
  )
}

export const TripleNested = () => {
  return (
    <FluidContainer horizontal className="h-screen">
      <Box className="bg-gray-500 w-48">Header</Box>
      <FluidContainer>
        <Box className="bg-gray-400">Header</Box>
        <FluidContainer reverse>
          <FluidContainer reverse horizontal>
            <Box className="bg-gray-200 overflow-auto">
              Put a bird on it pinterest cornhole PBR&B asymmetrical. Subway
              tile vaporware next level, cardigan forage blue bottle mixtape
              taxidermy lumbersexual raclette cronut woke humblebrag stumptown.
              Helvetica umami drinking vinegar forage mlkshk tattooed +1 kinfolk
              ennui cliche. Tofu mixtape butcher, chia messenger bag etsy prism
              vaporware +1. Skateboard PBR&B chia, hot chicken irony adaptogen
              lomo migas listicle. Schlitz flannel you probably haven't heard of
              them semiotics, aesthetic tumeric lumbersexual photo booth PBR&B
              gochujang narwhal jean shorts. Vinyl meh distillery 8-bit swag.
              Brooklyn meditation fashion axe pok pok, thundercats whatever VHS
              tumeric unicorn 3 wolf moon pinterest franzen master cleanse
              mustache flexitarian. Before they sold out truffaut flannel raw
              denim sartorial knausgaard tattooed gluten-free snackwave actually
              adaptogen. Sartorial twee DIY helvetica franzen iceland. Subway
              tile ugh austin occupy mlkshk glossier. Slow-carb live-edge
              everyday carry, cornhole kogi bicycle rights four dollar toast
              kombucha chartreuse iceland skateboard lo-fi single-origin coffee
              blog. Meggings cold-pressed microdosing, deep v kickstarter shabby
              chic bespoke green juice swag pickled direct trade cliche
              shoreditch yr. Selfies photo booth man bun ramps, mustache vinyl
              quinoa narwhal shaman biodiesel pop-up subway tile health goth
              affogato. Meditation roof party disrupt street art selfies
              mustache fixie vape organic occupy ethical.
            </Box>
            <Box className="bg-gray-600">Header</Box>
          </FluidContainer>
          <Box className="bg-gray-400">Footer</Box>
        </FluidContainer>
      </FluidContainer>
    </FluidContainer>
  )
}
