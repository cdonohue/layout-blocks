import { ResizeObserver } from '@juggle/resize-observer'
import {
  RefObject,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  useMemo,
} from 'react'

type ObservedSize = {
  width: number
  height: number
}

type ResizeHandler = (size: ObservedSize) => void

function useResizeObserver(
  opts: {
    ref?: RefObject<HTMLElement>
    onResize?: ResizeHandler
  } = {}
): { ref: RefObject<HTMLElement> } & ObservedSize {
  const defaultRef = useRef<HTMLElement>(null)

  const onResize = opts.onResize
  const onResizeRef = useRef<ResizeHandler | undefined>(undefined)
  onResizeRef.current = onResize

  const resizeObserverRef = useRef<ResizeObserver>() as MutableRefObject<
    ResizeObserver
  >

  const ref = defaultRef
  const [size, setSize] = useState<ObservedSize>({
    width: 0,
    height: 0,
  })

  const previous: {
    current: ObservedSize
  } = useRef({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (resizeObserverRef.current) return

    resizeObserverRef.current = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) {
        return
      }

      if (!entries.length) {
        return
      }

      const [entry] = entries

      const [boxSize] = entry.borderBoxSize
      const newWidth = Math.round(boxSize.inlineSize)
      const newHeight = Math.round(boxSize.blockSize)
      if (
        previous.current.width !== newWidth ||
        previous.current.height !== newHeight
      ) {
        const newSize = { width: newWidth, height: newHeight }
        if (onResizeRef.current) {
          onResizeRef.current(newSize)
        } else {
          previous.current.width = newWidth
          previous.current.height = newHeight
          setSize(newSize)
        }
      }
    })
  }, [])

  useEffect(() => {
    if (
      typeof ref !== 'object' ||
      ref === null ||
      !(ref.current instanceof Element)
    ) {
      return
    }

    const element = ref.current

    resizeObserverRef.current.observe(element)

    return () => resizeObserverRef.current.unobserve(element)
  }, [ref])

  return useMemo(() => ({ ref, width: size.width, height: size.height }), [
    ref,
    size ? size.width : null,
    size ? size.height : null,
  ])
}

export default useResizeObserver
