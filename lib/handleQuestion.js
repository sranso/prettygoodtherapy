import nlp from "compromise";

const handleQuestion = (value) => {
  const question = nlp(value);
  console.log('q', question);
};

export default handleQuestion;
