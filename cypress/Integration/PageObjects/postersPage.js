class PostersPage{

    static createButton(){
        return cy.get('[href$="#/customers/create"]')
    }

    static descriptionText(){
        return  cy.get('div[contenteditable="true"][class="ProseMirror"]')
 
    }

    static description(){
        return  cy.get('a').contains('Description')  
    }

    static searchButton(){
        return  cy.get('[placeholder="Search"]')
  }

   static makeoverPic(){
        return  cy.get('div').contains('Make Over')
  }

  static saveButton(){
        return  cy.get('[type="submit"]')
  }

  static posterUpdated(){
        return  cy.get('div').contains('Poster updated')
  }

  static deleteButton(){
        return    cy.get('button[aria-label="Delete"]')
  }
  

}
export default PostersPage;