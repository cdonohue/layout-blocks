import ResizeObserver from 'resize-observer-polyfill'
import { RefObject, useEffect, useState } from 'react'

type DOMRectReadOnly = {
  readonly bottom: number
  readonly height: number
  readonly left: number
  readonly right: number
  readonly top: number
  readonly width: number
  readonly x: number
  readonly y: number
}

const useResizeObserver = (ref: RefObject<HTMLElement>, callback?: any) => {
  const [dimensions, setDimensions] = useState<DOMRectReadOnly>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const [entry] = entries
      if (callback) callback(entry.contentRect)
      setDimensions(entry.contentRect)
    })

    if (ref.current) {
      resizeObserver.observe(ref.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [ref])

  return dimensions
}

export default useResizeObserver
