const Form = ({ input, handleInputChange, onSubmit }) => (
  <div>
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
        onChange={(e) => handleInputChange(e.target.input)}
        required>
      </textarea>
      <input type="submit" value="Let's see..."/>
    </form>
  </div>
)

export default Form
