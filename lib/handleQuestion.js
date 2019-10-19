import nlp from "compromise"

const handleQuestion = (value) => {
  const question = nlp(value)
  const sentences = question.sentences()

  console.log('question', question)
  console.log('sentences', sentences)
  console.log('nouns', question.nouns())
  console.log('i?', question.has('i'))
  console.log('people', question.people())
  // console.log('pronouns', question.pronoun())
  console.log('conjugation', question.verbs().conjugation())
  console.log('conjugate', question.verbs().conjugate())

  return "Because of your mom"
}

export default handleQuestion
