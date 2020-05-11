import React from 'react'

import styled from '../utils/styled'

export default {
  title: 'Styled',
}

const Thing = styled.div`
  & {
    color: dodgerblue;
    padding: ${(props: any): string => props.padding};
  }
`

export const StyledComponent = () => {
  return <Thing>lorem ipsum</Thing>
}

export const StyledComponentWithComputedProps = () => {
  return <Thing padding="1rem">lorem ipsum</Thing>
}

export const StyledComponentWithNestedChildren = () => {
  return (
    <Thing padding="1rem">
      <div>lorem ipsum</div>
    </Thing>
  )
}

export const StyledComponentAsAnotherTag = () => {
  return <Thing as="a">lorem ipsum</Thing>
}
