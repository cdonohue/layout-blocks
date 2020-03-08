import { useEffect, useState, RefObject } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

interface DOMRectReadOnly {
  readonly bottom: number
  readonly height: number
  readonly left: number
  readonly right: number
  readonly top: number
  readonly width: number
  readonly x: number
  readonly y: number
}

/**
 * Hook parameters.
 */
interface useResizeObserverProperties {
  /**
   * Ref object from `useRef`.
   */
  ref?: RefObject<Element> | null

  /**
   * DOM element. E.g. from `querySelector()`
   */
  element?: Element | null | undefined

  /**
   * Callback to fire when the observed component or Element
   * resizes.
   */
  callback?: (entry: ResizeObserverEntry) => void
}

const IS_BROWSER = typeof window !== 'undefined'

/**
 * Watch for the resizing of a React component or Element.
 *
 * @param hookProperties - Configuration optinos for the hook.
 *
 * @returns The `DOMRect` for the observed element.
 */
const useResizeObserver = ({
  ref,
  element,
  callback,
}: useResizeObserverProperties) => {
  const [sizes, setSizes] = useState<DOMRectReadOnly>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  })

  const handleResize = (entries: ResizeObserverEntry[]) => {
    const [entry] = entries

    if (callback) callback(entry)

    setSizes(entry.contentRect)
  }

  const [resizeObs] = useState(() =>
    IS_BROWSER ? new ResizeObserver(handleResize) : undefined
  )

  useEffect(() => {
    if (!resizeObs) return
    let domNode

    if (ref) domNode = ref.current
    else if (element) domNode = element

    if (domNode) resizeObs.observe(domNode)

    return () => resizeObs.disconnect()
  }, [ref, resizeObs, element])

  return sizes
}

export default useResizeObserver
