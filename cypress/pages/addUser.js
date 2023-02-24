
class addUser {

    static addUserBtn() {
        cy.get('thead > :nth-child(2) > td > .btn').click()
    }
    static name() {
        cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').type('Gabriel')
    }
    static lastName() {
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').type('Batistuta')
    }
    static username() {
        cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').type('batistutag')
    }
    static password() {
        cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine').type('randomPassword')
    }
    static optCustomer() {
        cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine').click()
    }
    static role() {
        cy.get('select')
            .select('Customer')
            .should('have.value', '1')
    }
    static email() {
        cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').type('test123@test.com')
    }
    static phone() {
        cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').type('3052485632')
    }
    static btnSave() {
        cy.get('.btn.btn-success').click()
    }
    static trigger() {
        cy.contains('td', 'sale').siblings().eq(0)
    }
}
export default addUser;