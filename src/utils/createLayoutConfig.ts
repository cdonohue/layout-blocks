import createHash from './createHash'
import useApi from './useApi'

export function enhancePropsWithClassname(
  props: { [key: string]: any },
  newClass: string
) {
  const { className = '' } = props
  return {
    ...props,
    className: className.length ? className.concat(` ${newClass}`) : newClass,
  }
}

export function reduceApi(name: string, props: { [key: string]: any }) {
  const api = {
    ...useApi(name),
  }

  return {
    ...Object.keys(api).reduce((apiFinal, key) => {
      if (props.hasOwnProperty(key)) {
        const apiValue = props[key]
        return {
          ...apiFinal,
          [key]: apiValue,
        }
      }

      return apiFinal
    }, api),
  }
}

export function createLayoutClassname(
  type: string,
  api: { [key: string]: any } = {}
) {
  return `layout-block-${type}-${createHash(JSON.stringify(api))}`
}

type layoutConfigOptsType = {
  defaultApi?: any
  contextApi?: any
  name: string
  props?: any
}

export default function createLayoutConfig(opts: layoutConfigOptsType) {
  const { name, props } = opts

  const { as: Tag = 'div', children, ...remainingProps } = props

  const api = reduceApi(name, remainingProps)

  Object.keys(api).forEach(key => delete remainingProps[key])

  const layoutClass = createLayoutClassname(name, api)
  const selector = `${Tag}.${layoutClass}`

  return {
    api,
    children,
    passedProps: enhancePropsWithClassname(remainingProps, layoutClass),
    selector,
    Tag,
  }
}
