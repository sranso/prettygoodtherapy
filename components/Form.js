import formStyles from './Form.module.css'

const Form = ({ input, handleInputChange, onSubmit }) => (
  <div className={formStyles.wrapper}>
    <h1>Pretty Good Therapy</h1>
    <form className={formStyles.form} onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <p>
        Hello, please take a seat.
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
