# Layout Blocks

Reusable layout components for your React project

```
npm i layout-blocks
```

## Components

All layout components support an `as` prop to define the html element you want the block to render as (defaults to `div`).

### `Center`

Horizontally centers children up to a `max` width. Can also define side gutters for padding.

```
import { Center } from 'layout-blocks'
```

| prop           | values  | description                                                                                                                                 | default |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| max            | string  | Unit of space used to define the max width of the container. The container will have auto inline margin applied when this width is reached. | `0`     |
| gutter         | string  | Controls the inline padding of the container                                                                                                | `0`     |
| centerChildren | boolean | Specifies if the container should also center children if they do not meet the `max` width                                                  | `false` |

### `Cluster`

Flex row container that wraps to flow items to the next line. Useful for button groups and pill boxes.

```
import { Cluster } from 'layout-blocks'
```

| prop    | values                                                                         | description                                  | default      |
| ------- | ------------------------------------------------------------------------------ | -------------------------------------------- | ------------ |
| align   | `flex-start` `center` `flex-end`                                               | Controls vertical axis alignment             | `center`     |
| justify | `flex-start` `center` `flex-end` `space-around` `space-between` `space-evenly` | Controls horizontal axis alignment           | `flex-start` |
| spacing | string                                                                         | Unit of space used to separate cluster items | `1rem`       |

### `VStack`

Renders children in a vertical stack with a prop to control horizontal alignment.

```
import { VStack } from 'layout-blocks'
```

| prop      | values                        | description                                   | default  |
| --------- | ----------------------------- | --------------------------------------------- | -------- |
| spacing   | string                        | Unit of space used to separate stack items    | `0`      |
| alignment | `leading` `center` `trailing` | Controls the horizontal alignment of children | `center` |

### `HStack`

Renders children in a horizontal stack with a prop to control vertical alignment.

```
import { HStack } from 'layout-blocks'
```

| prop      | values                  | description                                 | default  |
| --------- | ----------------------- | ------------------------------------------- | -------- |
| spacing   | string                  | Unit of space used to separate stack items  | `0`      |
| alignment | `top` `center` `bottom` | Controls the vertical alignment of children | `center` |

### `Flex`

Flex container abstraction used by both `VStack` and `HStack`

```
import { Flex } from 'layout-blocks'
```

| prop      | value                                                                          | description                   | default  |
| --------- | ------------------------------------------------------------------------------ | ----------------------------- | -------- |
| align     | `flex-start` `center` `flex-end`                                               | Controls cross axis alignment | `center` |
| justify   | `flex-start` `center` `flex-end` `space-around` `space-between` `space-evenly` | Controls main axis alignment  | `center` |
| direction | `row` `column`                                                                 | Direction flow children       | `row`    |

### `Spacer`

Useful to insert space within stacks to push surrounding content away.

```
import { Spacer } from 'layout-blocks'
```

### `Grid`

Renders children in a grid with a prop to control the minimum width before rendering each child in a row of it's own.

```
import { Grid } from 'layout-blocks'
```

| prop    | value  | description                                                  | default |
| ------- | ------ | ------------------------------------------------------------ | ------- |
| spacing | string | Unit of space used to separate grid items                    | `1rem`  |
| min     | string | Minimum width of child before collapsing to one item per row | `250px` |
