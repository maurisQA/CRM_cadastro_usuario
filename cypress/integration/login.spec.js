/// <reference types="cypress" />



context('Funcionalidade login', () => {


    it('Deve fazer login com sucesso', () => {
        cy.visit('https://crm-dev.zaz.vc/login')
        cy.get('[startadornment="[object Object]"] > .MuiInputBase-root > .MuiInputBase-input').type('mauricio.figueiredo@zaz.vc')
        cy.get('[style="margin-top: 20px; margin-bottom: 20px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Teste789@')
        cy.get('.MuiButton-label').click()
        cy.get('[style="display: flex; flex-direction: row; align-items: center;"] > .MuiButtonBase-root').click()
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.sc-lcepkR > :nth-child(2) > :nth-child(2)').click()
        cy.get(`[data-value="${Math.floor(Math.random() * 6) + 1}"]`).click()
        
    })

})