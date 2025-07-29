/// <reference types="Cypress" />
import LoginPage from '../PageObjects/loginPage'
import HomePage from '../PageObjects/homePage'
import PostersPage from '../PageObjects/postersPage';

describe('Test Suite', function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data=data
         cy.visit(Cypress.env('url'), {failOnStatusCode: false})
        })
          
    })


    it('verfiy verifyPosterEditAndDeletionFlow', function() {

          //login
          
          LoginPage.UserName_Input().should('be.visible');
          LoginPage.UserName_Input().type(this.data.user);
          LoginPage.Password_Input().type(this.data.user);
          LoginPage.Login_Button().click();

          //edit poster
      
          HomePage.posterLink().should('be.visible').click();
          PostersPage.searchButton().click().type('make');
          PostersPage.makeoverPic().should('be.visible').click();
          PostersPage.description().should('be.visible').click();
          PostersPage.descriptionText().should('be.visible').click()
          .type('{selectAll}{backspace}').type('new');
          PostersPage.saveButton().click();
          PostersPage.posterUpdated().should('be.visible');

          //verfiy on edit

          HomePage.posterLink().should('be.visible').click();
          PostersPage.makeoverPic().should('be.visible').click();
          PostersPage.description().should('be.visible').click();
          PostersPage.descriptionText().should('be.visible').should('have.text','new').click();

          //delete the poster and verfiy its not exist

          PostersPage.deleteButton().should('be.visible');
          PostersPage.deleteButton().eq(1).click();
          PostersPage.searchButton({ timeout: 3000 }).should('be.visible').click();
          PostersPage.makeoverPic().should('not.exist');


        })

    after('LogOut', function() {
        HomePage.profileName().click();
        HomePage.logoutButton().click();
    })

    
});
