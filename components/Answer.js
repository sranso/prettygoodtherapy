import formStyles from './Form.module.css'

const Answer = ({ question, answer, askAgain }) => (
  <div>
    <p><i>{question}</i></p>
    <p className="-answer">{answer}</p>
    <button className={formStyles.submit} onClick={(e) => { e.preventDefault(); askAgain(); }}>Dig deeper</button>
  </div>
)

export default Answer
