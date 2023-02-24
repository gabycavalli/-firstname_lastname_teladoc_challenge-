import addUser from "../pages/addUser"
import deleteUser from "../pages/deleteUser"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// This is what I've been doing to get a delay between commands. You just have to make sure you're enumerating all the commands that you want a delay on in that array.
const COMMAND_DELAY = 2000;


for (const command of['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'should']) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
        const origVal = originalFn(...args);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(origVal);
            }, COMMAND_DELAY);
        });
    });
}

Cypress.Commands.add('addUser', () => {
    addUser.addUserBtn()
    addUser.name()
    addUser.lastName()
    addUser.username()
    addUser.password()
    addUser.optCustomer()
    addUser.role()
    addUser.email()
    addUser.phone()
    addUser.btnSave()
    addUser.validate()
    addUser.validateUserAdded()
})

Cypress.Commands.add('delUser', () => {
    deleteUser.goToUser()
    deleteUser.modalConfirmation()
    deleteUser.deleteUser()
    deleteUser.validateUserDeleted()
})
Cypress.Commands.add('getSizeofTable',()=>{
    cy.get("tbody")
            .find("tr")
            .then((row) => {
                //row.length will give you the row count
                cy.log('The size of the table is: ' + row.length);
            });
})