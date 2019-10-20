import nlp from "compromise"

const handleQuestion = (value = 'Why is it cold') => {
  const question = nlp(value)
  const firstWord = question.terms().data()[0].normal

  /*
  console.log('question', question)
  console.log('adverbs', question.questions().data())
  console.log('terms', question.terms().data())
  console.log('sentences', question.sentences())
  console.log('nouns', question.nouns())
  console.log('i?', question.has('i'))
  console.log('people', question.people())
  // console.log('pronouns', question.pronoun())
  console.log('conjugation', question.verbs().conjugation())
  console.log('conjugate', question.verbs().conjugate())
  */

  switch(firstWord) {
    case 'why':
      return 'Because of your mom.'
    case 'how':
      return 'Because of your mom.'
    case 'what':
      return 'Your mom.'
    case 'who':
      return 'Because of your mom.'
    case 'is':
      return 'Yes, your mom.'
    default:
      return 'Hm, that\'s an interesting question. Where did it come from?'
  }
}

export default handleQuestion
