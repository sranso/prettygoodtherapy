import formStyles from './Form.module.css'

const Form = ({ input, handleInputChange, onSubmit }) => (
  <>
    <h1>Integrative Therapy</h1>
    <p>
      Hello, it's good to see you. What question is on your mind?
    </p>
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
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
  </>
)

export default Form
