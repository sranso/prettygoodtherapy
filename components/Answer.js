import { useState } from 'react';

const Answer = ({ question, answer, askAgain }) => (
  <div>
    <p><i>{question}</i></p>
    <p className="-answer">{answer}</p>
    <button onClick={(e) => { e.preventDefault(); askAgain(); }}>Ask Again</button>
  </div>
)

export default Answer