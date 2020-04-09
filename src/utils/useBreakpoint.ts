import useResizeObserver from './useResizeObserver'
import { MutableRefObject } from 'react'

const useBreakpoint = (
  breakpoints: string[],
  ref: MutableRefObject<HTMLElement>
) => {
  const { width: referenceWidth } = useResizeObserver({ ref })

  const el = document.createElement('div')
  el.style.position = 'absolute'

  if (ref.current) ref.current.appendChild(el)

  const matches = breakpoints.map(breakpoint => {
    el.style.width = breakpoint
    return referenceWidth >= el.offsetWidth
  })

  el.remove()

  return matches
}

export default useBreakpoint
