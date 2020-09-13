import nlp from 'compromise'
import nlpSentences from 'compromise-sentences'
nlp.extend(nlpSentences)

import parent from './parent'
import determineWhyHowWhoValue from './determineWhyHowWhoValue'

const RESPONSE_TYPES = {
  try_again: 'try_again',
  why_how_who: 'why_how_who',
  what: 'what',
  when: 'when',
  is: 'is',
  other: 'other'
}
Object.freeze(RESPONSE_TYPES)

const handleQuestion = (value = '') => {
  let doc = nlp(value)
  const isQuestion = doc.sentences().isQuestion()
  const questionWord = doc.match('#QuestionWord').text() || isQuestion.firstTerm().text()

  console.log('questionWord', questionWord)
  console.log('isQuestion', isQuestion)

  if (!isQuestion.out('array').length) {
    return {
      value: 'Please, ask a question. Together we can uncover your inner self.',
      type: RESPONSE_TYPES.try_again
    }
  }

  if (/why|how|who/i.test(questionWord)) {
    return {
      value: determineWhyHowWhoValue(doc),
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
