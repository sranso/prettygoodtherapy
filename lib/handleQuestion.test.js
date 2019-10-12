import handleQuestion from "./handleQuestion";

test('answers why questions', () => {
  expect(handleQuestion('Why am I sad?')).toBe('You are sad because of your mom.');
});
