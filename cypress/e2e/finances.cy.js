describe('Transações', () => {
    it('cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#");
        //cy.visit serve para visitar o site
    
        cy.contains("Nova Transação").click(); 
        //cy.contains serve para encontrar um elemento através do texto
        //click() é um comando necessário para clicar no elemento.
        cy.get('#description').type("Freela")
        cy.get('#amount').type(300)
        cy.get('#date').type("2024-08-05")
        cy.contains('button', 'Salvar').click()
    });
})
