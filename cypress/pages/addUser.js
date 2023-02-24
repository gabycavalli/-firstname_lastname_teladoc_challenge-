import data from '../fixtures/data.json'
const newUser = data.firstName;

class addUser {
    static addUserBtn() {
        cy.get('thead > :nth-child(2) > td > .btn').click()
    }
    static name() {
        cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').type(data.firstName)
    }
    static lastName() {
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').type(data.lastName)
    }
    static username() {
        cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').type(data.userName)
    }
    static password() {
        cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine').type(data.password, { log: false })
    }
    static optCustomer() {
        cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine').click()
    }
    static role() {
        cy.get('select')
            .select(data.role)
            .should('have.value', '1')
    }
    static email() {
        cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').type(data.email)
    }
    static phone() {
        cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').type(data.cellphone)
    }
    static btnSave() {
        cy.get('.btn.btn-success').click()
    }
    static validate() {
        cy.contains('td', data.lastName).siblings().eq(0).should('have.text', data.firstName)
        cy.contains('td', data.lastName).siblings().eq(1).should('have.text', data.userName)
    }
    static validateUserAdded() {
        let row = 8;
        for (let i = 1; i < row; i++) {
            cy.get('body > table > tbody > tr:nth-child(' + i + ')').each(($el) => {
                // grabbing all text from second column
                const txt = $el.text();
                // checking the matching condition
                if (txt.includes(data.firstName)) {
                    cy.log(`User ${newUser} was found in row ` + i)
                }
            })
        }
    }
}
export default addUser;