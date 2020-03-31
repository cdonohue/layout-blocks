import createHash from './createHash'

export function enhancePropsWithClassname(
  props: Record<string, any>,
  newClass: string
) {
  const { className = '' } = props
  return {
    ...props,
    className: className.length ? className.concat(` ${newClass}`) : newClass,
  }
}

export function createLayoutClassname(
  name: string,
  props: Record<string, any> = {}
) {
  return `layout-block-${name}-${createHash(JSON.stringify(props))}`
}
