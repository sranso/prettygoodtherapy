import nlp from 'compromise'
import nlpSentences from 'compromise-sentences'
nlp.extend(nlpSentences)

const RESPONSE_TYPES = {
  try_again: 'try_again',
  why_how_who: 'why_how_who',
  what: 'what',
  when: 'when',
  is: 'is',
  other: 'other'
}
Object.freeze(RESPONSE_TYPES)

const parent = () => (Math.random() > 0.2) ? 'mom' : 'dad'

const handleQuestion = (value = '') => {
  let doc = nlp(value)
  const isQuestion = doc.sentences().isQuestion()
  const questionWord = doc.match('#QuestionWord').text() || isQuestion.firstTerm().text()

  console.log('questionWord', questionWord)
  console.log('isQuestion', isQuestion)

  if (!isQuestion.out('array').length) {
    return {
      value: 'Let\'s try again that in the form of a question.',
      type: RESPONSE_TYPES.try_again
    }
  }

  if (/why|how|who/i.test(questionWord)) {
    return {
      value: `Because of your ${parent()}.`,
      type: RESPONSE_TYPES.why_how_who
    }
  }
  if (/what/i.test(questionWord)) {
    return {
      value: `Your ${parent()}.`,
      type: RESPONSE_TYPES.what
    } 
  }
  if (/when/i.test(questionWord)) {
    return {
      value: `When your ${parent()} decides you are ready.`,
      type: RESPONSE_TYPES.when
    }
  }
  if (/is/i.test(questionWord)) {
    return {
      value: `Yes, because of your ${parent()}.`,
      type: RESPONSE_TYPES.is
    }
  }

  return {
    value: 'Hm, that\'s an interesting question. Where did it come from?',
    type: RESPONSE_TYPES.other
  }
}

export default handleQuestion
