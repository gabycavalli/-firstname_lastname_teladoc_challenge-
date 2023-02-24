describe("Test4", function () {

    it("Test4", function () {
        cy.visit("https://www.way2automation.com/angularjs-protractor/webtables/")
        // identify first column
        cy.get('body > table > tbody')
            .contains('novak')
            .parent('tr')
            .within(() => {
                // all searches are automatically rooted to the found tr element
                cy.get('td').eq(10).click()
                cy.get('.btn-primary').click()
            })
    })
})

