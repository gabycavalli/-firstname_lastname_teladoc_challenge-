import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import addUser from '../pages/addUser'
import deleteUser from '../pages/deleteUser'

Given('A successful browse to the website', function () {
    cy.visit(Cypress.env('url'))
})
When('I do click on addUser button', function () {
    addUser.addUserBtn()
})
And('fill modal with the user information', () => {
    addUser.name()
    addUser.lastName()
    addUser.username()
    addUser.password()
    addUser.optCustomer()
    addUser.role()
    addUser.email()
    addUser.phone()
})
And('do click on save button', () => {
    addUser.addUserBtn()
})
Then('user user should be added to the table', function () {
    addUser.trigger()
})
When('I find a user to be delted, I do click on delete button',()=>{
    deleteUser.goToUser()    
})
Then('System show me a conformation message',() => {
    deleteUser.modalConfirmation()
})
And('I do click in ok',()=>{
    deleteUser.deleteUser()
})
And ('user should be deleted from the table',()=>{
    
})

