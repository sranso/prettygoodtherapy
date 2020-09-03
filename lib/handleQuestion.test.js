import handleQuestion from './handleQuestion'

test('answers questions logically', () => {
  expect(handleQuestion('Why am I sad?')).toBe('Because of your mom.')
  expect(handleQuestion('How come it is cold outside')).toBe('Because of your mom.')
  expect(handleQuestion('what makes me cry')).toBe('Your mom.')
  expect(handleQuestion('is there a meaning to life')).toBe('Yes, your mom.')
  expect(handleQuestion('when will i be happy')).toBe('Hm, that\'s an interesting question. Where did it come from?')
})
