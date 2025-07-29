class HomePage{


    static posterLink(){
        return cy.get('[href$="#/products"]')
    }

    static profileName(){
        return cy.get('[aria-label="Profile"]')
    }

    static logoutButton(){
        return cy.get('div').contains('Logout')
    }

}
export default HomePage;