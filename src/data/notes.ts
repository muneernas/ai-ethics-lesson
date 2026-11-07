import type { SlideMeta } from '../types'

export const slidesMeta: SlideMeta[] = [
  {
    id: 'title',
    section: 'Hook',
    title: 'AI & Ethics',
    notes: {
      teacherSays:
        'Welcome. Today we are not learning what AI is — you already know that. We are investigating whether AI deserves to make decisions about humans.',
      ask: 'What is one decision AI already makes in your daily life?',
      expected: ['Recommendations', 'Face unlock', 'Spam filters', 'Maps routing'],
      time: '~1 min',
    },
  },
  {
    id: 'judge',
    section: 'Hook',
    title: 'The AI Judge',
    notes: {
      teacherSays:
        'Look at this rejection screen. Do not tell me the “right” answer yet. Vote with your hands.',
      ask: 'Who made the decision — human, algorithm, data, company, or AI?',
      expected: ['Split votes', 'Some say company', 'Some say data'],
      time: '~1.5 min',
    },
  },
  {
    id: 'four',
    section: 'Hook',
    title: 'Four Problems',
    notes: {
      teacherSays:
        'Today you investigate four ways AI can affect people’s lives. Keep these four words in mind for the debate.',
      ask: 'Which of these already affects teenagers the most?',
      expected: ['Privacy / social media', 'Surveillance cameras', 'Bias in school tools'],
      time: '~1.5 min',
    },
  },
  {
    id: 'bias-game',
    section: 'Bias',
    title: 'The Biased AI Game',
    notes: {
      teacherSays:
        'An AI is trained to recognize faces. Before I explain anything — what could go wrong? Vote A–D.',
      ask: 'Why might an AI fail for some faces more than others?',
      expected: ['Unbalanced training data', 'Nothing — computers are objective (trap)'],
      time: '~2 min',
    },
  },
  {
    id: 'opinions',
    section: 'Bias',
    title: 'AI Doesn’t Have Opinions',
    notes: {
      teacherSays:
        'AI does not have feelings. But it learns from data humans created. Follow the pipeline with me.',
      ask: 'Where in this pipeline does unfairness enter?',
      expected: ['Data', 'Sometimes how the model is designed', 'How decisions are used'],
      time: '~2 min',
    },
  },
  {
    id: 'school-ai',
    section: 'Bias',
    title: 'School Success AI',
    notes: {
      teacherSays:
        'A school builds an AI to flag who is “likely to succeed.” Discuss for 30–45 seconds: what could make this unfair?',
      ask: 'Would you want this system used on you?',
      expected: ['Historical bias', 'Fewer opportunities', 'Subjective behaviour records'],
      time: '~2.5 min',
    },
  },
  {
    id: 'bias-intent',
    section: 'Bias',
    title: 'Bias ≠ Intent',
    notes: {
      teacherSays:
        'Key idea: AI can be unfair without “trying” to be unfair. Leave the responsibility question open — we return to it later.',
      ask: 'Who is responsible — the coder, the company, the school, or the data?',
      expected: ['Debate; no single answer yet'],
      time: '~1.5 min',
    },
  },
  {
    id: 'privacy-know',
    section: 'Privacy',
    title: 'How Much Does AI Know?',
    notes: {
      teacherSays:
        'This is a fictional AI profile screen. Drag or click the scale: how much should AI be allowed to know about you?',
      ask: 'Is your answer different for school vs social media?',
      expected: ['Most place near the middle', 'Some say almost nothing'],
      time: '~2 min',
    },
  },
  {
    id: 'smartlife',
    section: 'Privacy',
    title: 'SmartLife AI',
    notes: {
      teacherSays:
        'Trade-off time. SmartLife AI wants many permissions. Would you give access? Vote yes / no / only some.',
      ask: 'Which permission would you refuse first?',
      expected: ['Microphone', 'Contacts', 'Location always on'],
      time: '~2 min',
    },
  },
  {
    id: 'tradeoff',
    section: 'Privacy',
    title: 'Privacy vs Convenience',
    notes: {
      teacherSays:
        'Everyday examples: maps, face unlock, assistants, recommendations. When is the benefit worth the data?',
      ask: 'Name one convenience you would give up for more privacy.',
      expected: ['Personalized ads', 'Always-listening assistants'],
      time: '~2 min',
    },
  },
  {
    id: 'privacy-test',
    section: 'Privacy',
    title: 'The Privacy Test',
    notes: {
      teacherSays:
        'Give students a memorable framework of five questions before sharing data with any AI system.',
      ask: 'Which question do people forget most often?',
      expected: ['How long is it kept?', 'Can I delete it?', 'Who gets it?'],
      time: '~2 min',
    },
  },
  {
    id: 'spot',
    section: 'Surveillance',
    title: 'Spot the Surveillance',
    notes: {
      teacherSays:
        'Click the hotspots in this fictional city. How many AI surveillance systems can you find?',
      ask: 'How much surveillance is too much?',
      expected: ['Students identify cameras, plates, facial recognition'],
      time: '~2 min',
    },
  },
  {
    id: 'safety',
    section: 'Surveillance',
    title: 'The Safety Argument',
    notes: {
      teacherSays:
        'Strong argument for surveillance: safety. Then show risks. Do not force a side — force a reason.',
      ask: 'Does safety justify surveillance?',
      expected: ['It depends', 'Only with limits', 'Yes for crime / no for everyday life'],
      time: '~2 min',
    },
  },
  {
    id: 'the-line',
    section: 'Surveillance',
    title: 'Where Do You Draw the Line?',
    notes: {
      teacherSays:
        'Three scenarios from limited to everywhere. Ask students to stand or vote for their line.',
      ask: 'Where would YOU draw the line?',
      expected: ['Many stop before city-wide facial recognition'],
      time: '~2 min',
    },
  },
  {
    id: 'hired',
    section: 'AI Hiring',
    title: "You're Hired?",
    notes: {
      teacherSays:
        '500 applications → AI screening → 20 interviews. Would you trust AI to decide who gets an interview?',
      ask: 'Vote: Yes / No / Human + AI',
      expected: ['Most choose Human + AI'],
      time: '~2 min',
    },
  },
  {
    id: 'hiring-problem',
    section: 'AI Hiring',
    title: 'What Could Go Wrong?',
    notes: {
      teacherSays:
        'Companies may analyze CVs, video, speech, even facial expressions. What could go wrong? Tap the issues students name.',
      ask: 'Which risk worries you most?',
      expected: ['Bias', 'Privacy', 'Lack of transparency'],
      time: '~2 min',
    },
  },
  {
    id: 'hidden',
    section: 'AI Hiring',
    title: 'The Hidden Problem',
    notes: {
      teacherSays:
        'Two strong candidates. AI picks B who matches historical preferences. Was the AI “wrong”?',
      ask: 'If you train AI on yesterday’s decisions, what happens?',
      expected: ['It reproduces yesterday’s biases'],
      time: '~2.5 min',
    },
  },
  {
    id: 'human-or-ai',
    section: 'AI Hiring',
    title: 'Human or AI?',
    notes: {
      teacherSays:
        'Four high-stakes decisions. For each, vote AI / Human / Both. There is not always one obvious answer.',
      ask: 'Which decision feels hardest to hand to AI?',
      expected: ['Medical priority', 'Security risk'],
      time: '~1.5 min',
    },
  },
  {
    id: 'big-q',
    section: 'Debate',
    title: 'The Big Question',
    notes: {
      teacherSays:
        'Build drama. Read the question slowly. This is the main activity — move desks or form two sides.',
      ask: 'Ready to choose a side?',
      expected: ['Energy / curiosity'],
      time: '~1 min',
    },
  },
  {
    id: 'sides',
    section: 'Debate',
    title: 'Choose Your Side',
    notes: {
      teacherSays:
        'Show possible arguments as starting points, not as the correct answer. Students may invent better ones.',
      ask: 'Which argument on your side is strongest?',
      expected: ['Varied'],
      time: '~1.5 min',
    },
  },
  {
    id: 'rules',
    section: 'Debate',
    title: 'Debate Rules',
    notes: {
      teacherSays: 'Keep rules short and visible. Emphasize: challenge ideas, not people.',
      ask: 'Any questions before we start?',
      expected: ['Clarifying questions only'],
      time: '~1 min',
    },
  },
  {
    id: 'debate',
    section: 'Debate',
    title: 'Debate Round',
    notes: {
      teacherSays:
        'Start the 3-minute timer. Remind students their argument needs a benefit/risk, example, and who is responsible.',
      ask: 'Who wants to open for each side?',
      expected: ['Short speeches + rebuttals'],
      time: '~3–4 min',
    },
  },
  {
    id: 'twist',
    section: 'Debate',
    title: 'Twist the Debate',
    notes: {
      teacherSays:
        'Twist: What if the AI is more accurate than humans — 95% vs 85%? Should we use it anyway? Allow position changes.',
      ask: 'Did anyone change their mind? Why?',
      expected: ['Accuracy vs fairness/accountability tension'],
      time: '~2–3 min',
    },
  },
  {
    id: 'toolkit',
    section: 'Conclusion',
    title: 'The Ethics Toolkit',
    notes: {
      teacherSays:
        'Close with four questions as a toolkit. Final line: AI doesn’t decide what is right — humans do. Humans are responsible for how we build and use AI.',
      ask: 'Which toolkit question will you remember first?',
      expected: ['Who is responsible?', 'Is it fair?'],
      time: '~2 min',
    },
  },
]
