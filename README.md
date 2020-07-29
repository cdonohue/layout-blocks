# Layout Blocks

Reusable layout components for your React project

```
npm i layout-blocks
```

## Components

All layout components support an `as` prop to define the html element you want the block to render as (defaults to `div`).

### `VStack`

Renders children in a vertical stack with a prop to control horizontal alignment.

```
import { VStack } from 'layout-blocks'
```

| prop      | values                                  | description                                   | default   |
| --------- | --------------------------------------- | --------------------------------------------- | --------- |
| alignment | `leading` `center` `trailing` `stretch` | Controls the horizontal alignment of children | `stretch` |

### `Screen`

A special opinionated version of a vertical stack that assumes height and width of the viewport and also centers content both horizontally and vertically.

```
import { Screen } from 'layout-blocks'
```

### `HStack`

Renders children in a horizontal stack with a prop to control vertical alignment.

```
import { HStack } from 'layout-blocks'
```

| prop      | values                            | description                                 | default   |
| --------- | --------------------------------- | ------------------------------------------- | --------- |
| alignment | `top` `center` `bottom` `stretch` | Controls the vertical alignment of children | `stretch` |

### `Flex`

Useful for controlling how much space an item takes up within a `HStack`, `VStack`, or `Screen`. Think of this as an abstraction over `flex` properties. Use it to control growing, shrinking, and initial size.

```
import { Flex } from 'layout-blocks'
```

| prop   | value  | description                          | default |
| ------ | ------ | ------------------------------------ | ------- |
| grow   | string | Specifies the `flex-grow` property   | `1`     |
| shrink | string | Specifies the `flex-shrink` property | `1`     |
| basis  | string | Specifies the `flex-basis` property  | `0%`    |

### `Spacer`

Shorthand for `<Flex />` with no props. Useful to insert space within stacks to push surrounding content away.

```
import { Spacer } from 'layout-blocks'
```

### `Breakout`

Useful when you have a restricting container (maybe in width) and you need an element to stretch to the width of the viewport without flowing the element outside of the container (like a callout section).

```
import { Breakout } from 'layout-blocks'
```

### `Tiles`

Renders children in a grid with a prop to control the minimum width before rendering each child in a row of it's own.

```
import { Tiles } from 'layout-blocks'
```

| prop | value  | description                                                  | default |
| ---- | ------ | ------------------------------------------------------------ | ------- |
| min  | string | Minimum width of child before collapsing to one item per row | `250px` |
