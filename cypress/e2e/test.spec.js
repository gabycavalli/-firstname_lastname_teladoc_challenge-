//import { url } from "inspector"
import addUser from "../pages/addUser.js"
import deleteUser from "../pages/deleteUser.js"

describe("firstname_lastname_teladoc_challenge", function () {

    beforeEach(function () {
        cy.visit(Cypress.env('url'))
    })
    it("get size of the table", () => {
        cy.getSizeofTable()
    })

    it("Scenario 1 - Add a user and validate the user has been added to the table", function () {

        cy.addUser()
        cy.getSizeofTable()
    })

    it("Scenario 2 - Delete the user novak from the table and validate the user has been deleted.", function () {

        cy.delUser()
        cy.getSizeofTable()

    })
})