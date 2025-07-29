class LoginPage{

    static UserName_Input(){
        return cy.get('[name="username"]')
    }  

    static Password_Input(){
        return cy.get('[name="password"]')      
    }

    static Login_Button(){
        return cy.contains('Sign in')
   }

}
export default LoginPage;