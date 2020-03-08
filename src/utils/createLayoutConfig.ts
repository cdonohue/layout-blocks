import createHash from './createHash'

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

export function reduceApi(
  apiFromDefaults: { [key: string]: any },
  apiFromContext: { [key: string]: any },
  props: { [key: string]: any }
) {
  const apiPrepopulated = {
    ...apiFromDefaults,
    ...apiFromContext,
  }

  return {
    ...Object.keys(apiPrepopulated).reduce((apiFinal, key) => {
      if (props.hasOwnProperty(key)) {
        const apiValue = props[key]
        return {
          ...apiFinal,
          [key]: apiValue,
        }
      }

      return apiFinal
    }, apiPrepopulated),
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
  const { defaultApi, contextApi, name, props } = opts

  const { as: Tag = 'div', children, ...remainingProps } = props

  const api = reduceApi(defaultApi, contextApi, remainingProps)

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
