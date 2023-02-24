class deleteUser{

    static goToUser(){
        cy.contains('td', 'novak').siblings().eq(9).click()   
    }
    static deleteUser(){
        cy.get('.btn-primary').click() 
    }
}
export default deleteUser;