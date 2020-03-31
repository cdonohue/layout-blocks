import { configure } from '@storybook/react'
import './globalStyles.css'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|ts)x?$/), module)
