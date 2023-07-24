describe('Buscando validar pelando', () => {
  it('Pegando uma promoção quente de cueca', () => {
    cy.visit('https://www.pelando.com.br/')
    cy.get('.sc-2407acc8-0').click()
    cy.get('.sc-jWOkvS').click()
    cy.get('#suggestions').type("Cuecas{enter}")
    cy.get(':nth-child(1) > :nth-child(2) > .sc-2b25d517-0 > .sc-hLBbgP > .sc-eDvSVe').click()
    cy.get(':nth-child(2) > .sc-cc052cf2-3').click()
    cy.get(':nth-child(1) > .sc-dPWrhe > .sc-bCfvAP').click()
    cy.get('.sc-59e89b98-9 > .sc-KXvuv > .sc-jjeeWu > .sc-uokDu > :nth-child(2) > .sc-hBxehG').click()
    })

    it('Agora buscando um artigo na biblioteca unbiave', () => {
      cy.visit('https://unibave.net/')
      cy.get(':nth-child(5) > .nav-link').click()
      cy.get('.page-item-32425 > a').click()
      cy.get('[href="http://biblioteca.unibave.net/pergamum/biblioteca/index.php"] > .alignnone').click()
    })
    // deixei separado pois nao entendi como continuar na visita abaixo sem abri outra aba e continuar o teste
    it('Agora buscando o artigo de Jhonas', () => {
      cy.visit('http://biblioteca.unibave.net/pergamum/biblioteca/index.php')
      cy.get('#termo_para_pesquisa').type("Jhonas")
      cy.get('#pesq').click()
      cy.get('td > .link_azul').click()
    })
})