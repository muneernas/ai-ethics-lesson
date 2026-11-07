import { slidesMeta } from './data/notes'
import { useDeck } from './hooks/useDeck'
import { slideComponents } from './slides/Slides'

export default function App() {
  const total = slideComponents.length
  const {
    index,
    next,
    prev,
    notesOpen,
    setNotesOpen,
    helpOpen,
    setHelpOpen,
    progress,
  } = useDeck(total)

  const meta = slidesMeta[index]
  const Slide = slideComponents[index]

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden />
          <div className="brand-text">
            AI & Ethics
            <span>· {meta.section}</span>
          </div>
        </div>
        <div className="progress-track" aria-hidden>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="top-meta">
          <span className="chip">{meta.notes.time}</span>
          <span>
            {index + 1}/{total}
          </span>
          <button
            type="button"
            className={`icon-btn ${notesOpen ? 'active' : ''}`}
            aria-label="Toggle speaker notes"
            title="Speaker notes (N)"
            onClick={() => setNotesOpen(!notesOpen)}
          >
            N
          </button>
          <button
            type="button"
            className={`icon-btn ${helpOpen ? 'active' : ''}`}
            aria-label="Keyboard help"
            title="Help (?)"
            onClick={() => setHelpOpen(!helpOpen)}
          >
            ?
          </button>
        </div>
      </header>

      <main className="stage">
        <Slide key={meta.id} />

        {notesOpen && (
          <aside className="notes-panel" aria-label="Speaker notes">
            <h4>Teacher notes</h4>
            <p>
              <strong>Say:</strong> {meta.notes.teacherSays}
            </p>
            <p>
              <strong>Ask:</strong> {meta.notes.ask}
            </p>
            <p>
              <strong>Expect:</strong>
            </p>
            <ul>
              {meta.notes.expected.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p>
              <strong>Time:</strong> {meta.notes.time}
            </p>
          </aside>
        )}

        {helpOpen && (
          <div className="help-overlay" role="dialog" aria-label="Keyboard shortcuts">
            <div className="help-card">
              <h3>Presenter controls</h3>
              <dl>
                <dt>→ / Space</dt>
                <dd>Next slide</dd>
                <dt>←</dt>
                <dd>Previous slide</dd>
                <dt>N</dt>
                <dd>Speaker notes</dd>
                <dt>F</dt>
                <dd>Fullscreen</dd>
                <dt>?</dt>
                <dd>This help</dd>
              </dl>
              <button type="button" className="btn primary mt-2" onClick={() => setHelpOpen(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="footerbar">
        <div className="keys">
          <span className="kbd">←</span> <span className="kbd">→</span> navigate ·{' '}
          <span className="kbd">N</span> notes · <span className="kbd">F</span> fullscreen
        </div>
        <div className="row">
          {['Hook', 'Bias', 'Privacy', 'Surveillance', 'Hiring', 'Debate', 'End'].map((s) => {
            const on =
              (s === 'Hook' && index <= 2) ||
              (s === 'Bias' && index >= 3 && index <= 6) ||
              (s === 'Privacy' && index >= 7 && index <= 10) ||
              (s === 'Surveillance' && index >= 11 && index <= 13) ||
              (s === 'Hiring' && index >= 14 && index <= 17) ||
              (s === 'Debate' && index >= 18 && index <= 22) ||
              (s === 'End' && index === 23)
            return <span key={s} className={`section-dot ${on ? 'on' : ''}`} title={s} />
          })}
        </div>
        <div className="nav-group">
          <button type="button" className="btn ghost" onClick={prev} disabled={index === 0}>
            Back
          </button>
          <button
            type="button"
            className="btn primary"
            onClick={next}
            disabled={index === total - 1}
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  )
}
