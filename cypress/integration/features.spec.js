/**
 * when writing feature tests – given, when, then, (cleanup)
 *
 * 4-phase test style – setup, exercise, assert, cleanup
 */

describe('given a user has a question', () => {
 it('when they ask a question, then they get an answer', () => {
   const question = 'Why am I sad?'
   cy.visit('http://localhost:3000/')
   cy.get('textarea').type(question)
   cy.get('input[type=submit]').click()
   cy.get('.-answer').should('be.visible')
 })
})
