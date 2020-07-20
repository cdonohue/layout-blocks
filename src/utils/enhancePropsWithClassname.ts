export default function enhancePropsWithClassname(
  props: Record<string, any>,
  newClass: string
) {
  const { className = '' } = props
  return {
    ...props,
    className: className.length ? className.concat(` ${newClass}`) : newClass,
  }
}
