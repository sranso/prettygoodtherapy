import handleQuestion from './handleQuestion'

test('if there is no question, ask for a question', () => {
	expect(handleQuestion('u r v cute').type).toBe('try_again')
})

test('correctly matches why how who', () => {
  expect(handleQuestion('So why am I sad?').type).toBe('why_how_who')
  expect(handleQuestion('How come it is cold outside').type).toBe('why_how_who')

  // #Modal options
  expect(handleQuestion('How can I change my attitude').type).toBe('why_how_who')
  expect(handleQuestion('How do I divest myself from an outcome without cultivating apathy').type).toBe('why_how_who')
})
test('correctly matches what', () => {
  expect(handleQuestion('wHat makes me cry').type).toBe('what')
})
test('correctly matches is', () => {
  expect(handleQuestion('is there a meaning to life').type).toBe('is')
 })
test('correctly matches am', () => {
  expect(handleQuestion('am i a scone head?').type).toBe('am')
 })
test('correctly matches when', () => {
  expect(handleQuestion('when will i be happy').type).toBe('when')
})
