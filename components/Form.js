import formStyles from './Form.module.css'

const Form = ({ input, handleInputChange, onSubmit }) => (
  <div className={formStyles.wrapper}>
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <p>
        Please, take a seat.
        <br /><i>~we take a breath~</i>
        <br />So. What question is on your mind?
      </p>
      <label htmlFor="question"></label>
      <textarea
        type="text"
        name="question"
        id="question"
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        className={formStyles.textarea}
        required>
      </textarea>
      <input type="submit" className={formStyles.submit} value="Let's see..."/>
    </form>
  </div>
)

export default Form
