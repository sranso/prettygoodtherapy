import nlp from 'compromise'
import nlpSentences from 'compromise-sentences'
nlp.extend(nlpSentences)

import formStyles from './Form.module.css'

const Answer = ({ input, answer, askAgain }) => (
  <div className={formStyles.wrapper}>
    <p className={formStyles.answers}><i>{nlp(input).sentences().toQuestion().text()}</i></p>
    <p className={formStyles.answers}>{answer}</p>
    <button className={formStyles.submit} onClick={(e) => { e.preventDefault(); askAgain(); }}>Dig deeper</button>
  </div>
)

export default Answer
