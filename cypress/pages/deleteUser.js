import { Console } from 'console'
import data from '../fixtures/data.json'
const userToBeDeleted = data.userToBeDeleted
class deleteUser {

    static goToUser() {
        cy.contains('td', data.userToBeDeleted).siblings().eq(9).click()
    }
    static deleteUser() {
        cy.get('.btn-primary').click()
    }
    static modalConfirmation() {
        cy.get('h3').should('have.text', 'Confirmation Dialog')
        cy.get('p').should('have.text', 'Do you really want to delete the user?')
    }
    static validateUserDeleted() {
        let row = 7;
        cy.log('*****Checking the table******')
        for (let i = 1; i < row; i++) {
            cy.get('body > table > tbody > tr:nth-child(' + i + ')').each(($el) => {
                // grabbing all text from second column
                const txt = $el.text();
                // checking the matching condition
                if (txt.includes(data.userToBeDeleted)) {
                    cy.log(`User ${userToBeDeleted} was found in row`, i)
                } 
            })
        }
        cy.log(`User ${userToBeDeleted} wasn't found in table. User deleted successfully`)
    }
}
export default deleteUser;