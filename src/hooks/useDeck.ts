import { useCallback, useEffect, useState } from 'react'

export function useDeck(total: number) {
  const [index, setIndex] = useState(0)
  const [notesOpen, setNotesOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(total - 1, next)))
    },
    [total],
  )

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prev()
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(total - 1)
      } else if (e.key.toLowerCase() === 'n') {
        setNotesOpen((v) => !v)
      } else if (e.key.toLowerCase() === 'h' || e.key === '?') {
        setHelpOpen((v) => !v)
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          void document.documentElement.requestFullscreen?.()
        } else {
          void document.exitFullscreen?.()
        }
      } else if (e.key === 'Escape') {
        setHelpOpen(false)
      } else if (/^[0-9]$/.test(e.key)) {
        // number keys unused — reserved
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, next, prev, total])

  return {
    index,
    setIndex: go,
    next,
    prev,
    notesOpen,
    setNotesOpen,
    helpOpen,
    setHelpOpen,
    progress: ((index + 1) / total) * 100,
  }
}
