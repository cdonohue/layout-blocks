import React, { ReactNode } from 'react'
import createHash from './createHash'

const externalStyled = (() => {
  try {
    require.resolveWeak('styled-components')
    return require('styled-components')
  } catch {}
  try {
    require.resolveWeak('@emotion/styled')
    return require('@emotion/styled')
  } catch {}
})()

export type LayoutProps = StyledProps & {
  layoutName?: string
}

export type StyledProps = {
  children?: ReactNode
  /** HTML element to render */
  as?: any
  className?: string
}

function createLayoutClassname(name: string, styles: string) {
  return `layout-block-${name}-${createHash(styles)}`
}

function enhancePropsWithClassname(
  props: Record<string, any>,
  newClass: string
) {
  const { className = '' } = props
  return {
    ...props,
    className: className.length ? className.concat(` ${newClass}`) : newClass,
  }
}

function processStyles(
  props: any,
  strings: TemplateStringsArray,
  ...values: any[]
) {
  return strings
    .map((str, i) => {
      const valueType = typeof values[i]
      const value =
        valueType === 'function' ? values[i](props) : values[i] || ''
      return `${str}${value}`
    })
    .join('')
    .replace(/\s\s+/g, ' ')
}

function createStyleTag(styles: string) {
  return <style dangerouslySetInnerHTML={{ __html: styles }} />
}

const _styled = {
  div(strings: TemplateStringsArray, ...values: any[]) {
    return React.forwardRef((props: LayoutProps, ref) => {
      const styles = processStyles(props, strings, ...values)
      const { as: Tag = 'div', layoutName = 'box', children, ...rest } = props

      const layoutClass = createLayoutClassname(layoutName, styles)
      const selector = `${Tag}.${layoutClass}`
      return (
        <>
          {createStyleTag(styles.replace(/&/g, selector))}
          <Tag {...enhancePropsWithClassname({ ...rest, ref }, layoutClass)}>
            {children}
          </Tag>
        </>
      )
    })
  },
}

const styled = externalStyled ? externalStyled.default : _styled

export default styled
