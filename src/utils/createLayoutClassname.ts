import createHash from './createHash'

export default function createLayoutClassname(name: string, styles: string) {
  return `layout-block-${name}-${createHash(styles)}`
}
