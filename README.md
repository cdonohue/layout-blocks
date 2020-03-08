# Layout Blocks

Reusable layout components for your React project

```
npm i layout-blocks
```

## Components

### `Box`

Pad all sides (or none at all)

```
import { Box } from 'layout-blocks'
```

| prop    | type   | description                 | default     |
| ------- | ------ | --------------------------- | ----------- |
| padding | string | `padding` value for content | `var(--s1)` |
| as      | string | HTML element to render      | `div`       |

### `Breakout`

Break out of a containing element

```
import { Breakout } from 'layout-blocks'
```

| prop | type   | description            | default |
| ---- | ------ | ---------------------- | ------- |
| as   | string | HTML element to render | `div`   |

### `Center`

Center content horizontally

```
import { Center } from 'layout-blocks'
```

| prop       | type    | description                            | default          |
| ---------- | ------- | -------------------------------------- | ---------------- |
| max        | string  | Maximum width to limit content         | `var(--measure)` |
| centerText | boolean | Also center the text within            | `false`          |
| gutter     | string  | Space on each side of the content      | `0`              |
| intrinsic  | boolean | Center children based on content width | `false`          |
| as         | string  | HTML element to render                 | `div`            |

### `Container`

Contain children (enforces `relative` positioning)

```
import { Container } from 'layout-blocks'
```

| prop | type   | description            | default |
| ---- | ------ | ---------------------- | ------- |
| as   | string | HTML element to render | `div`   |

### `Cover`

"Cover" a height and vertically center the content within (like Hero elements)

```
import { Cover } from 'layout-blocks'
```

| prop          | type    | description                                                                              | default     |
| ------------- | ------- | ---------------------------------------------------------------------------------------- | ----------- |
| centeredIndex | number  | 1-based index of what child to center vertically (has no effect when there is one child) | `2`         |
| space         | string  | Spacing between child elements                                                           | `var(--s1)` |
| minHeight     | string  | Minimum height to cover                                                                  | `100vh`     |
| isPadded      | boolean | Also use the `space` value to pad the container                                          | `false`     |
| as            | string  | HTML element to render                                                                   | `div`       |

### `Frame`

Properly crop an image/video to an aspect ratio

```
import { Frame } from 'layout-blocks'
```

| prop  | type   | description                                  | default |
| ----- | ------ | -------------------------------------------- | ------- |
| ratio | string | Aspect ratio of element (`[width]:[height]`) | `16:9`  |
| as    | string | HTML element to render                       | `div`   |

### `Grid`

Display a grid of items with a minimum width

```
import { Grid } from 'layout-blocks'
```

| prop  | type   | description                               | default     |
| ----- | ------ | ----------------------------------------- | ----------- |
| min   | string | Minimum width of children                 | `250px`     |
| space | string | Space value used for gap between children | `var(--s1)` |
| as    | string | HTML element to render                    | `div`       |

### `Group`

Show an overflowing group of things horizontally, each with maybe a different width

```
import { Group } from 'layout-blocks'
```

| prop    | type   | description                                                                                      | default     |
| ------- | ------ | ------------------------------------------------------------------------------------------------ | ----------- |
| align   | string | Vertical alignment (`start`, `center`, `end`, `stretch`)                                         | `center`    |
| justify | string | Horizontal alignment (`start`, `center`, `end`, `space-between`, `space-around`, `space-evenly`) | `start`     |
| space   | string | Space value used for gap between children                                                        | `var(--s1)` |
| as      | string | HTML element to render                                                                           | `div`       |

### `Position`

Position content outside of it's normal flow

```
import { Position } from 'layout-blocks'
```

| prop   | type    | description                                                   | default     |
| ------ | ------- | ------------------------------------------------------------- | ----------- |
| margin | string  | Space to offset from the edge of the containing element       | `var(--s1)` |
| fixed  | boolean | Contain the element to the viewport (instead of the document) | `false`     |
| x      | string  | Positioning along x-axis (`left`, `center`, `right`, `full`)  | `center`    |
| y      | string  | Positioning along y-axis (`top`, `center`, `bottom`, `full`)  | `center`    |
| as     | string  | HTML element to render                                        | `div`       |

### `Sidebar`

Show a sidebar/content horizontal layout that stacks vertically at a certain threshold

```
import { Sidebar } from 'layout-blocks'
```

| prop       | type    | description                                                                                                                                     | default |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| side       | string  | Side to treat as the sidebar                                                                                                                    | `left`  |
| sideWidth  | string  | Width value to limit the sidebar to in horizontal mode                                                                                          | `false` |
| contentMin | string  | Percentage value to use as the breakpoint for the element opposite the sidebar (going under this percentage switches over to a vertical layout) | `50%`   |
| space      | string  | Space between elements (sidebar and content)                                                                                                    | `0`     |
| stretch    | boolean | Stretch sidebar to match content (and vice versa)                                                                                               | `false` |
| as         | string  | HTML element to render                                                                                                                          | `div`   |

### `Stack`

Vertically position a list of things (with optional spacing)

```
import { Stack } from 'layout-blocks'
```

| prop      | type    | description                                   | default     |
| --------- | ------- | --------------------------------------------- | ----------- |
| space     | string  | Vertical space between child elements         | `var(--s1)` |
| recursive | boolean | Recursively apply spacing (for nested stacks) | `false`     |
| as        | string  | HTML element to render                        | `div`       |

### `Switcher`

Show a list of things horizontally, then stack when a container thershold is met

```
import { Switcher } from 'layout-blocks'
```

| prop      | type   | description                                    | default          |
| --------- | ------ | ---------------------------------------------- | ---------------- |
| threshold | string | Breakpoint to layout items in a vertical stack | `var(--measure)` |
| space     | string | Space value used for the gap between children  | `var(--s1)`      |
| limit     | number | Number of items to limit to one row            | `4`              |
| as        | string | HTML element to render                         | `div`            |
