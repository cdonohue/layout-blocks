import useResizeObserver from './useResizeObserver'
import { useRef } from 'react'

const useContainerWidth = (...breakpoints: string[]) => {
  const ref = useRef<HTMLElement>(null!)
  const { width: referenceWidth } = useResizeObserver(ref)

  const el = document.createElement('div')
  el.style.position = 'absolute'

  ref.current!.appendChild(el)

  const matches = breakpoints.map(breakpoint => {
    el.style.width = breakpoint
    return referenceWidth >= el.offsetWidth
  })

  el.remove()

  return [ref, ...matches]
}

export default useContainerWidth
