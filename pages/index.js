import { useState } from 'react'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Answer from '../components/Answer'
import Reviews from '../components/Reviews'
import handleQuestion from "../lib/handleQuestion"


const Index = () => {
  const [isAsking, setAsking] = useState(true)
  const [hasAsked, setHasAsked] = useState(false)
  const [answer, setAnswer] = useState({})
  const [input, handleInputChange] = useState('')

  const evaluate = () => {
    setAnswer(handleQuestion(input).value)
    setAsking(false)
  }

  const reset = () => {
    handleInputChange('')
    setAsking(true)
    setHasAsked(true)
  }

  return (
    <Layout>
      <h1>Pretty Good Therapy</h1>
      {isAsking ?
        <Form input={input} handleInputChange={handleInputChange} hasAsked={hasAsked} onSubmit={evaluate} />
        :
        <Answer input={input} answer={answer} askAgain={reset} />
      }
      <Reviews />
    </Layout>
  )
}

export default Index
