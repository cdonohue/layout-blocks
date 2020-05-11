import useResizeObserver from './useResizeObserver'
import { useState, useEffect, useMemo } from 'react'
console.log(require.resolve('react'))

function debounce(func: any, wait: any = 50) {
  let timeout: any
  return [
    function(this: any, ...args: any[]) {
      const context = this
      var later = function() {
        timeout = null
        func.apply(context, args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    },
    () => clearTimeout(timeout),
  ]
}

export const useRefWidth = (...breakpoints: string[]) => {
  const [width, setWidth] = useState(0)
  const [matches, setMatches] = useState<boolean[]>(
    breakpoints.map(() => false)
  )

  const [onResize, clear] = useMemo(
    () =>
      debounce((size: any) => {
        setWidth(size.width)
      }),
    [width]
  )

  const { ref } = useResizeObserver({ onResize })

  useEffect(() => {
    const el = document.createElement('div')
    el.style.position = 'absolute'

    if (ref.current) ref.current.appendChild(el)

    setMatches(
      breakpoints.map(breakpoint => {
        el.style.width = breakpoint
        return width >= el.offsetWidth
      })
    )

    return () => {
      el.remove()
      clear()
    }
  }, [width])

  return useMemo(() => [ref, ...matches], [matches])
}
