export type SpeakerNotes = {
  teacherSays: string
  ask: string
  expected: string[]
  time: string
}

export type SlideMeta = {
  id: string
  section: string
  title: string
  notes: SpeakerNotes
}
