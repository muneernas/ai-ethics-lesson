import { useEffect, useState, type ReactNode } from 'react'

export function Reveal({
  show,
  children,
  className = '',
}: {
  show: boolean
  children: ReactNode
  className?: string
}) {
  if (!show) return null
  return <div className={`reveal ${className}`}>{children}</div>
}

export function VoteChoice({
  letter,
  label,
  selected,
  correct,
  revealed,
  onSelect,
}: {
  letter: string
  label: string
  selected: boolean
  correct?: boolean
  revealed?: boolean
  onSelect: () => void
}) {
  const classes = [
    'card',
    'interactive',
    selected ? 'selected' : '',
    revealed && correct ? 'correct' : '',
    revealed && selected && !correct ? 'dimmed' : '',
    revealed && !selected && !correct ? 'dimmed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} onClick={onSelect} disabled={revealed}>
      <span className="choice-row">
        <span className="choice-letter">{letter}</span>
        <span>{label}</span>
      </span>
    </button>
  )
}

export function VoteButtons({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string; tone?: 'yes' | 'no' | 'mixed' | 'ghost' }[]
  value: string | null
  onChange: (id: string) => void
}) {
  return (
    <div className="row mt-2">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={`btn ${opt.tone ?? 'ghost'} ${value === opt.id ? 'selected' : ''}`}
          onClick={() => onChange(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export function PrivacyScale({
  value,
  onChange,
}: {
  value: number
  onChange: (n: number) => void
}) {
  return (
    <div className="mt-2">
      <div
        className="scale-track"
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label="How much should AI know about you"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100)
          onChange(Math.max(0, Math.min(100, pct)))
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') onChange(Math.min(100, value + 5))
          if (e.key === 'ArrowLeft') onChange(Math.max(0, value - 5))
        }}
      >
        <div className="scale-thumb" style={{ left: `${value}%` }} />
      </div>
      <div className="scale-labels">
        <span>NOTHING</span>
        <span>{value}%</span>
        <span>EVERYTHING</span>
      </div>
    </div>
  )
}

export function CountdownTimer({ seconds = 180 }: { seconds?: number }) {
  const [left, setLeft] = useState(seconds)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running || left <= 0) return
    const id = window.setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000)
    return () => window.clearInterval(id)
  }, [running, left])

  const pct = (left / seconds) * 100
  const mm = String(Math.floor(left / 60)).padStart(2, '0')
  const ss = String(left % 60).padStart(2, '0')

  return (
    <div className="timer-wrap">
      <div className="timer-ring" style={{ ['--p' as string]: pct }}>
        {mm}:{ss}
      </div>
      <div className="stack">
        <button
          type="button"
          className="btn primary"
          onClick={() => setRunning((r) => !r)}
        >
          {running ? 'Pause' : left === 0 ? 'Finished' : 'Start 3:00'}
        </button>
        <button
          type="button"
          className="btn ghost"
          onClick={() => {
            setRunning(false)
            setLeft(seconds)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export function RevealButton({
  revealed,
  onReveal,
  label = 'Reveal',
}: {
  revealed: boolean
  onReveal: () => void
  label?: string
}) {
  if (revealed) return null
  return (
    <button type="button" className="btn primary mt-2" onClick={onReveal}>
      {label}
    </button>
  )
}
