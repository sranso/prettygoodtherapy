import nlp from 'compromise'

import formStyles from './Form.module.css'

const Answer = ({ input, answer, askAgain }) => (
  <div className={formStyles.wrapper}>
    <p className={formStyles.answers}><i>{input}</i></p>
    <p className={formStyles.answers}>{answer}</p>
    <button className={formStyles.submit} onClick={(e) => { e.preventDefault(); askAgain(); }}>Dig deeper</button>
  </div>
)

export default Answer
