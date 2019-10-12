import { useState } from 'react';
import nlp from 'compromise';
import Layout from '../components/Layout';

const handleSubmit = (e, value) => {
  e.preventDefault();
  const question = nlp(value);
  console.log('q', question);
};

const Index = () => {
  const [value, handleValueChange] = useState('');

  return (
    <Layout>
      <p>Hello, it's good to see you. What can I help you with today?</p>
      <form onSubmit={(e) => handleSubmit(e, value)}>
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
    </Layout>
  );
};

export default Index;
