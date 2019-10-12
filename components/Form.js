import { useState } from 'react';
import handleQuestion from '../lib/handleQuestion';

const Form = () => {
  const [value, handleValueChange] = useState('');

  return (
    <div>
      <p>Hello, it's good to see you. What can I help you with today?</p>
      <form onSubmit={(e) => { e.preventDefault(); handleQuestion(value); }}>
        <label htmlFor="question"></label>
        <textarea
          type="text"
          name="question"
          id="question"
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
          required>
        </textarea>
        <input type="submit" value="Let's see..."/>
      </form>
    </div>
  );
};

export default Form;