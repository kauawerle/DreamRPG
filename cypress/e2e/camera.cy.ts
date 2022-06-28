import { IonButton } from "@ionic/react"

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8100/create')
		cy.viewport(412, 915)
		cy.get('ion-button').click({force: true})
  })
})
