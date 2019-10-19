import { useState } from 'react'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Answer from '../components/Answer'
import handleQuestion from "../lib/handleQuestion";


const Index = () => {
  const [isAsking, setAsking] = useState(true)
  const [answer, setAnswer] = useState('')
  const [value, handleValueChange] = useState('')

  const evaluate = () => {
    setAnswer(handleQuestion(value))
    setAsking(false)
  }

  const reset = () => {
    handleValueChange('')
    setAsking(true)
  }

  return (
    <Layout>
      {isAsking ?
        <Form value={value} handleValueChange={handleValueChange} onSubmit={evaluate} />
        :
        <Answer question={value} answer={answer} askAgain={reset} />
      }
    </Layout>
  )
}

export default Index
