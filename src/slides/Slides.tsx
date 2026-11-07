import { useState } from 'react'
import {
  CountdownTimer,
  PrivacyScale,
  Reveal,
  RevealButton,
  VoteButtons,
  VoteChoice,
} from '../components/ui'

export function SlideTitle() {
  return (
    <div className="slide" style={{ position: 'relative' }}>
      <p className="slide-kicker">Grade 9–10 · Interactive investigation</p>
      <h1 className="slide-title">
        AI &amp; <span className="gold">ETHICS</span>
      </h1>
      <p className="slide-sub">
        When AI makes the decision… who is responsible?
      </p>
      <p className="hint mt-3">40 minutes · Scenario → Decision → Reveal → Discussion</p>
      <div className="hero-visual" aria-hidden="true" />
    </div>
  )
}

export function SlideJudge() {
  const [vote, setVote] = useState<string | null>(null)

  return (
    <div className="slide">
      <p className="slide-kicker">Hook · Decision #1</p>
      <div className="reject-panel mb-2">
        <div className="status">APPLICATION STATUS</div>
        <h2 className="slide-title mid" style={{ margin: 0 }}>
          You have been rejected.
        </h2>
        <p className="muted mt-1">Reference: AEX-2049 · Decision time: 0.04s</p>
      </div>
      <h3 className="slide-title mid">Who made the decision?</h3>
      <VoteButtons
        value={vote}
        onChange={setVote}
        options={[
          { id: 'human', label: 'A human', tone: 'ghost' },
          { id: 'algorithm', label: 'An algorithm', tone: 'mixed' },
          { id: 'data', label: 'The data', tone: 'ghost' },
          { id: 'company', label: 'The company', tone: 'yes' },
          { id: 'ai', label: 'The AI', tone: 'no' },
        ]}
      />
      <p className="hint">Vote first. We will not reveal a single “correct” answer yet.</p>
    </div>
  )
}

export function SlideFour() {
  const themes = [
    { emoji: '🧠', title: 'Bias', text: 'Unfair patterns in data become unfair outcomes.' },
    { emoji: '🔒', title: 'Privacy', text: 'AI systems often need — and keep — personal data.' },
    { emoji: '👁', title: 'Surveillance', text: 'Cameras + AI can watch people at scale.' },
    { emoji: '💼', title: 'AI Hiring', text: 'Algorithms may decide who gets a chance.' },
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Today’s investigation</p>
      <h2 className="slide-title mid">Four problems. Four dilemmas.</h2>
      <p className="lead muted mb-2">
        You’re going to investigate four ways AI can affect people’s lives.
      </p>
      <div className="grid-4">
        {themes.map((t) => (
          <div key={t.title} className="card theme-tile">
            <div className="emoji" aria-hidden>
              {t.emoji}
            </div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SlideBiasGame() {
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  const choices = [
    { id: 'A', label: 'The AI becomes tired' },
    { id: 'B', label: 'The training data is unbalanced' },
    { id: 'C', label: 'The computer gets slower' },
    { id: 'D', label: 'Nothing — computers are objective' },
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Bias · Scenario</p>
      <h2 className="slide-title mid">An AI is trained to recognize faces.</h2>
      <div className="silhouettes" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="face" />
        ))}
      </div>
      <p className="lead mb-2">What could go wrong?</p>
      <div className="grid-2">
        {choices.map((c) => (
          <VoteChoice
            key={c.id}
            letter={c.id}
            label={c.label}
            selected={selected === c.id}
            correct={c.id === 'B'}
            revealed={revealed}
            onSelect={() => setSelected(c.id)}
          />
        ))}
      </div>
      <RevealButton
        revealed={revealed}
        onReveal={() => setRevealed(true)}
        label="Reveal answer"
      />
      <Reveal show={revealed}>
        <div className="quote-box mt-2">
          <strong className="gold">B — Training data matters.</strong>
          <br />
          If some groups appear less often (or less clearly) in training data, recognition can
          fail unevenly — even when nobody “wanted” that result.
        </div>
      </Reveal>
    </div>
  )
}

export function SlideOpinions() {
  const [step, setStep] = useState(0)

  return (
    <div className="slide">
      <p className="slide-kicker">Bias · Concept</p>
      <h2 className="slide-title mid">
        AI doesn’t have opinions…
        <br />
        <span className="muted">Right?</span>
      </h2>
      <Reveal show={step >= 1}>
        <p className="lead mt-2">
          But AI learns from <span className="gold">data created by humans</span>.
        </p>
      </Reveal>
      <Reveal show={step >= 2}>
        <div className="pipeline">
          <div className="pipeline-node">HUMANS</div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-node accent">DATA</div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-node">AI MODEL</div>
          <span className="pipeline-arrow">→</span>
          <div className="pipeline-node accent">DECISION</div>
        </div>
        <p className="muted mt-2" style={{ maxWidth: '46ch' }}>
          If the data contains unfair patterns, the AI can reproduce — or amplify — them.
        </p>
      </Reveal>
      {step < 2 && (
        <button type="button" className="btn primary mt-2" onClick={() => setStep((s) => s + 1)}>
          {step === 0 ? 'Continue' : 'Show the pipeline'}
        </button>
      )}
    </div>
  )
}

export function SlideSchoolAI() {
  const [revealed, setRevealed] = useState(false)
  const risks = [
    'Historical data may already contain bias',
    'Some students have fewer opportunities',
    'Behaviour records can be subjective',
    'The model may confuse correlation with ability',
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Bias · Real-world scenario</p>
      <h2 className="slide-title mid">School “success” AI</h2>
      <div className="quote-box mb-2">
        A school builds an AI to identify students who are “likely to succeed.”
      </div>
      <div className="row mb-2">
        {['Previous grades', 'Attendance', 'Activities', 'Behaviour records'].map((f) => (
          <span key={f} className="chip">
            {f}
          </span>
        ))}
      </div>
      <p className="lead">What could make this unfair?</p>
      <p className="hint">Discuss for 30–45 seconds, then reveal.</p>
      <RevealButton revealed={revealed} onReveal={() => setRevealed(true)} label="Reveal possibilities" />
      <Reveal show={revealed}>
        <div className="grid-2 mt-2">
          {risks.map((r) => (
            <div key={r} className="card">
              <p>{r}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export function SlideBiasIntent() {
  return (
    <div className="slide">
      <p className="slide-kicker">Bias · Key idea</p>
      <h2 className="slide-title mid">
        AI can be unfair without
        <br />
        <span className="gold">“trying”</span> to be unfair.
      </h2>
      <div className="pipeline mt-3">
        <div className="pipeline-node">Biased data</div>
        <span className="pipeline-arrow">→</span>
        <div className="pipeline-node">Biased patterns</div>
        <span className="pipeline-arrow">→</span>
        <div className="pipeline-node accent">Biased outcome</div>
      </div>
      <p className="lead gold mt-3">Question: Who is responsible?</p>
      <p className="hint">Don’t answer yet — keep this question open.</p>
    </div>
  )
}

export function SlidePrivacyKnow() {
  const [value, setValue] = useState(40)
  const items = [
    'What you search',
    'What you watch',
    'Where you go',
    'What you buy',
    'Who you interact with',
    'What you click',
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Privacy · Profile</p>
      <h2 className="slide-title mid">How much does AI know about you?</h2>
      <div className="card mt-2" style={{ maxWidth: 720 }}>
        <p className="dim" style={{ marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
          AI PROFILE · FICTIONAL
        </p>
        <div className="profile-list">
          {items.map((item) => (
            <div key={item} className="profile-item">
              <span className="dot" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <p className="lead mt-2">How much of this should AI be allowed to know?</p>
      <PrivacyScale value={value} onChange={setValue} />
    </div>
  )
}

export function SlideSmartLife() {
  const [vote, setVote] = useState<string | null>(null)
  const wants = ['Location', 'Camera', 'Microphone', 'Contacts', 'Search history']
  const gives = [
    'Personalized recommendations',
    'Safety alerts',
    'Better predictions',
    'Personalized AI assistant',
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Privacy · Trade-off</p>
      <h2 className="slide-title mid">
        Meet <span className="gold">SmartLife AI</span>
      </h2>
      <div className="grid-2 mt-2">
        <div className="card">
          <h3>It asks for</h3>
          <div className="perm-list">
            {wants.map((w) => (
              <div key={w} className="perm">
                <span>{w}</span>
                <span className="dim">required</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>It offers</h3>
          <div className="perm-list">
            {gives.map((g) => (
              <div key={g} className="perm benefit">
                <span>{g}</span>
                <span className="dim">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="lead mt-2">Would you give it access?</p>
      <VoteButtons
        value={vote}
        onChange={setVote}
        options={[
          { id: 'yes', label: 'Yes', tone: 'yes' },
          { id: 'no', label: 'No', tone: 'no' },
          { id: 'some', label: 'Only some permissions', tone: 'mixed' },
        ]}
      />
    </div>
  )
}

export function SlideTradeoff() {
  const examples = [
    'Maps needs your location.',
    'Face unlock needs your face.',
    'AI assistants may process your conversations.',
    'Recommendation systems track your behaviour.',
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Privacy · Balance</p>
      <h2 className="slide-title mid">Privacy vs Convenience</h2>
      <div className="balance">
        <div className="balance-side">
          <h3>PRIVACY</h3>
          <p className="muted">Control over your data</p>
        </div>
        <div className="balance-fulcrum" aria-hidden>
          ⚖
        </div>
        <div className="balance-side">
          <h3>CONVENIENCE</h3>
          <p className="muted">Speed, personalization, ease</p>
        </div>
      </div>
      <div className="grid-2 mt-2">
        {examples.map((e) => (
          <div key={e} className="card">
            <p>{e}</p>
          </div>
        ))}
      </div>
      <p className="lead gold mt-2">When is the benefit worth the data?</p>
    </div>
  )
}

export function SlidePrivacyTest() {
  const qs = [
    { n: '1', t: 'What data?', d: 'Exactly what is collected?' },
    { n: '2', t: 'Why?', d: 'Is there a clear purpose?' },
    { n: '3', t: 'Who gets it?', d: 'Company, partners, governments?' },
    { n: '4', t: 'How long?', d: 'Kept for a day — or forever?' },
    { n: '5', t: 'Can I delete it?', d: 'Do you have real control?' },
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Privacy · Toolkit</p>
      <h2 className="slide-title mid">The Privacy Test</h2>
      <p className="lead muted mb-2">Before giving an AI system your data, ask:</p>
      <div className="checklist">
        {qs.map((q) => (
          <div key={q.n} className="check-item">
            <div className="check-num">{q.n}</div>
            <div>
              <strong>{q.t}</strong>
              <div className="muted">{q.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SlideSpot() {
  const spots = [
    { id: 'cctv', label: 'Street CCTV', tag: 'Video AI' },
    { id: 'face', label: 'Facial recognition gate', tag: 'Identity' },
    { id: 'plate', label: 'License plate reader', tag: 'ANPR' },
    { id: 'traffic', label: 'Smart traffic camera', tag: 'Traffic AI' },
    { id: 'mall', label: 'Mall security AI', tag: 'Behaviour' },
    { id: 'drone', label: 'Event drone monitor', tag: 'Aerial' },
  ]
  const [found, setFound] = useState<string[]>([])

  const toggle = (id: string) => {
    setFound((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <div className="slide">
      <div className="row space-between mb-1">
        <div>
          <p className="slide-kicker">Surveillance · Investigate</p>
          <h2 className="slide-title mid">Spot the surveillance</h2>
        </div>
        <div className="chip">{found.length}/{spots.length} found</div>
      </div>
      <p className="muted mb-2">Tap each place where AI might be watching in this fictional city.</p>
      <div className="city-grid">
        {spots.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`hotspot ${found.includes(s.id) ? 'found' : ''}`}
            onClick={() => toggle(s.id)}
          >
            <strong>{s.label}</strong>
            {found.includes(s.id) && <span className="tag">{s.tag}</span>}
          </button>
        ))}
      </div>
      <p className="lead gold mt-2">How much surveillance is too much?</p>
    </div>
  )
}

export function SlideSafety() {
  const [show, setShow] = useState(false)
  const [vote, setVote] = useState<string | null>(null)

  return (
    <div className="slide">
      <p className="slide-kicker">Surveillance · Dilemma</p>
      <div className="quote-box mb-2">
        If AI surveillance can prevent crime and find dangerous people faster, why shouldn’t we use
        it?
      </div>
      {!show ? (
        <button type="button" className="btn primary" onClick={() => setShow(true)}>
          Show benefits & risks
        </button>
      ) : (
        <Reveal show>
          <div className="grid-2">
            <div className="card">
              <h3 className="gold">Benefits</h3>
              <p>Faster detection · Public safety · Finding missing people · Traffic management</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--danger)' }}>Risks</h3>
              <p>Constant monitoring · False IDs · Lack of privacy · Misuse of data</p>
            </div>
          </div>
          <p className="lead mt-2">Does safety justify surveillance?</p>
          <VoteButtons
            value={vote}
            onChange={setVote}
            options={[
              { id: 'yes', label: 'Yes', tone: 'yes' },
              { id: 'no', label: 'No', tone: 'no' },
              { id: 'depends', label: 'It depends', tone: 'mixed' },
            ]}
          />
        </Reveal>
      )}
    </div>
  )
}

export function SlideTheLine() {
  const [line, setLine] = useState<string | null>(null)
  const options = [
    {
      id: 'green',
      badge: 'green',
      title: 'CCTV at a school entrance',
      tone: 'green' as const,
    },
    {
      id: 'yellow',
      badge: 'yellow',
      title: 'Facial recognition at a shopping mall',
      tone: 'yellow' as const,
    },
    {
      id: 'red',
      badge: 'red',
      title: 'Facial recognition everywhere in a city',
      tone: 'red' as const,
    },
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Surveillance · Your line</p>
      <h2 className="slide-title mid">Where would YOU draw the line?</h2>
      <div className="stack mt-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`card interactive line-card ${o.tone} ${line === o.id ? 'selected' : ''}`}
            onClick={() => setLine(o.id)}
          >
            <span className={`badge ${o.badge}`}>{o.id === 'green' ? 'LIMITED' : o.id === 'yellow' ? 'EXPANDED' : 'EVERYWHERE'}</span>
            <h3>{o.title}</h3>
            <p>{line === o.id ? 'This is your line.' : 'Tap if this is as far as you would go.'}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export function SlideHired() {
  const [vote, setVote] = useState<string | null>(null)

  return (
    <div className="slide">
      <p className="slide-kicker">AI Hiring · Hook</p>
      <h2 className="slide-title mid">You’re hired?</h2>
      <div className="flow">
        <div className="flow-box">500 applications</div>
        <span className="pipeline-arrow">↓</span>
        <div className="flow-box" style={{ borderColor: 'var(--border-strong)', background: 'var(--gold-dim)' }}>
          AI screening
        </div>
        <span className="pipeline-arrow">↓</span>
        <div className="flow-box">20 candidates</div>
      </div>
      <p className="lead">Would you trust AI to decide who gets an interview?</p>
      <VoteButtons
        value={vote}
        onChange={setVote}
        options={[
          { id: 'yes', label: 'Yes', tone: 'yes' },
          { id: 'no', label: 'No', tone: 'no' },
          { id: 'both', label: 'Human + AI', tone: 'mixed' },
        ]}
      />
    </div>
  )
}

export function SlideHiringProblem() {
  const issues = [
    { id: 'bias', title: 'Bias', text: 'Historical hiring patterns can be copied.' },
    { id: 'privacy', title: 'Privacy', text: 'Video, voice, and face data are sensitive.' },
    { id: 'wrong', title: 'Incorrect predictions', text: 'Correlation ≠ future performance.' },
    { id: 'opaque', title: 'Lack of transparency', text: 'Candidates may never know why.' },
    { id: 'disc', title: 'Discrimination', text: 'Accent, appearance, or background may be used unfairly.' },
  ]
  const [picked, setPicked] = useState<string[]>([])

  return (
    <div className="slide">
      <p className="slide-kicker">AI Hiring · Risks</p>
      <h2 className="slide-title mid">What could go wrong?</h2>
      <p className="muted mb-2">
        AI might analyze CVs, skills, written answers, video interviews, speech, even facial
        expressions.
      </p>
      <div className="grid-2">
        {issues.map((i) => (
          <button
            key={i.id}
            type="button"
            className={`card interactive ${picked.includes(i.id) ? 'selected' : ''}`}
            onClick={() =>
              setPicked((p) => (p.includes(i.id) ? p.filter((x) => x !== i.id) : [...p, i.id]))
            }
          >
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </button>
        ))}
      </div>
      <p className="hint">Tap the risks your class names.</p>
    </div>
  )
}

export function SlideHidden() {
  const [step, setStep] = useState(0)

  return (
    <div className="slide">
      <p className="slide-kicker">AI Hiring · Hidden pattern</p>
      <h2 className="slide-title mid">Was the AI “wrong”?</h2>
      <div className="grid-2 mt-2">
        <div className="card candidate">
          <h3>Candidate A</h3>
          <p>Excellent qualifications · Strong experience · Different background</p>
        </div>
        <div className="card candidate selected">
          <h3>Candidate B</h3>
          <p>Similar qualifications · Background historically preferred by the company</p>
          <p className="gold mt-1">AI selects B</p>
        </div>
      </div>
      <Reveal show={step >= 1}>
        <div className="quote-box mt-2">
          If you train an AI on yesterday’s decisions, it may reproduce yesterday’s biases.
        </div>
      </Reveal>
      {step < 1 && (
        <button type="button" className="btn primary mt-2" onClick={() => setStep(1)}>
          Reveal the key concept
        </button>
      )}
    </div>
  )
}

export function SlideHumanOrAI() {
  const decisions = [
    'Who gets a job interview?',
    'Who gets a loan?',
    'Who receives medical priority?',
    'Who is considered a security risk?',
  ]
  const [votes, setVotes] = useState<Record<number, string>>({})

  return (
    <div className="slide">
      <p className="slide-kicker">AI Hiring · Decide</p>
      <h2 className="slide-title mid">AI? Human? Both?</h2>
      <p className="muted mb-2">There isn’t always one obvious answer.</p>
      <div className="stack">
        {decisions.map((d, i) => (
          <div key={d} className="card decision-grid">
            <div className="label">{d}</div>
            <div className="mini-votes">
              {['AI', 'Human', 'Both'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`btn ghost ${votes[i] === opt ? 'selected' : ''}`}
                  onClick={() => setVotes((v) => ({ ...v, [i]: opt }))}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SlideBigQ() {
  return (
    <div className="slide">
      <p className="slide-kicker">The big debate</p>
      <h1 className="slide-title">
        Should AI make
        <br />
        <span className="gold">important</span> decisions?
      </h1>
      <p className="slide-sub mt-2">Or should humans always have the final say?</p>
    </div>
  )
}

export function SlideSides() {
  return (
    <div className="slide">
      <p className="slide-kicker">Debate · Positions</p>
      <h2 className="slide-title mid">Choose your side</h2>
      <div className="grid-2 mt-2">
        <div className="card side-yes">
          <h3>🟦 YES — AI should decide</h3>
          <p>
            Faster · Handles huge data · Doesn’t get tired · Can reduce some human biases ·
            Consistent decisions
          </p>
        </div>
        <div className="card side-no">
          <h3>🟥 NO — Humans should decide</h3>
          <p>
            AI can be biased · AI can err · People deserve explanations · Empathy matters · Someone
            must be accountable
          </p>
        </div>
      </div>
      <p className="hint mt-2">These are starting points — not the “correct” answer.</p>
    </div>
  )
}

export function SlideRules() {
  const rules = [
    'Pick a side.',
    'You must give a reason.',
    'Challenge ideas, not people.',
    'Use examples from today’s lesson.',
    'Be willing to change your mind.',
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Debate · Rules</p>
      <h2 className="slide-title mid">Debate rules</h2>
      <div className="checklist mt-2">
        {rules.map((r, i) => (
          <div key={r} className="check-item">
            <div className="check-num">{i + 1}</div>
            <strong>{r}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SlideDebate() {
  return (
    <div className="slide">
      <p className="slide-kicker">Debate · Round 1</p>
      <h2 className="slide-title mid">Should AI make important decisions?</h2>
      <div className="grid-2 mt-2" style={{ alignItems: 'center' }}>
        <CountdownTimer seconds={180} />
        <div className="card">
          <h3>Your argument must include</h3>
          <p>· A benefit OR risk</p>
          <p>· A real-world example</p>
          <p>· Who should be responsible</p>
        </div>
      </div>
    </div>
  )
}

export function SlideTwist() {
  const [vote, setVote] = useState<string | null>(null)
  const [step, setStep] = useState(0)

  return (
    <div className="slide">
      <p className="slide-kicker">Debate · Twist</p>
      <h2 className="slide-title mid">What if the AI is more accurate?</h2>
      <div className="quote-box mt-1">What if the AI is MORE accurate than humans?</div>
      <Reveal show={step >= 1}>
        <p className="lead mt-2">
          What if the AI is <span className="gold">95%</span> accurate, but humans are only{' '}
          <span className="gold">85%</span> accurate?
        </p>
        <p className="lead mt-1">Should we use it anyway?</p>
        <VoteButtons
          value={vote}
          onChange={setVote}
          options={[
            { id: 'yes', label: 'Yes — use it', tone: 'yes' },
            { id: 'no', label: 'No — still refuse', tone: 'no' },
            { id: 'guard', label: 'Only with human oversight', tone: 'mixed' },
          ]}
        />
      </Reveal>
      {step < 1 && (
        <button type="button" className="btn primary mt-2" onClick={() => setStep(1)}>
          Reveal the accuracy twist
        </button>
      )}
    </div>
  )
}

export function SlideToolkit() {
  const qs = [
    { t: 'Is it FAIR?', sub: 'Bias' },
    { t: 'Is it PRIVATE?', sub: 'Privacy' },
    { t: 'Is it SAFE?', sub: 'Surveillance & harm' },
    { t: 'WHO IS RESPONSIBLE?', sub: 'Accountability' },
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Conclusion · Take this with you</p>
      <h2 className="slide-title mid">The Ethics Toolkit</h2>
      <div className="final-q">
        {qs.map((q) => (
          <div key={q.t} className="card">
            {q.t}
            <div className="muted" style={{ fontSize: '0.85rem', marginTop: '0.35rem', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              {q.sub}
            </div>
          </div>
        ))}
      </div>
      <p className="finale">AI doesn’t decide what is right.</p>
      <p className="finale gold">Humans do.</p>
      <p className="lead muted mt-2" style={{ maxWidth: '40ch' }}>
        But humans are responsible for how we build and use AI.
      </p>
    </div>
  )
}

export const slideComponents = [
  SlideTitle,
  SlideJudge,
  SlideFour,
  SlideBiasGame,
  SlideOpinions,
  SlideSchoolAI,
  SlideBiasIntent,
  SlidePrivacyKnow,
  SlideSmartLife,
  SlideTradeoff,
  SlidePrivacyTest,
  SlideSpot,
  SlideSafety,
  SlideTheLine,
  SlideHired,
  SlideHiringProblem,
  SlideHidden,
  SlideHumanOrAI,
  SlideBigQ,
  SlideSides,
  SlideRules,
  SlideDebate,
  SlideTwist,
  SlideToolkit,
]
