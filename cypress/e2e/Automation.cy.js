import Login from "../POM/Login";


describe('suite', () => {
    it('Test1', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit("https://composio.dev")
        cy.wait(500)
       cy.xpath("//div[@class='uicore-nav-menu']//a[@class='uicore-btn ']").click({force: true})
       cy.wait(10000)
       cy.xpath("//input[@type='email']").type("somashekar.raghu@gmail.com").click()
       cy.wait(500)
    })


    it('Test2', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit("https://composio.dev")
       
            cy.wait(500)
            const ln=new Login();
            ln.loginbtn();
            ln.setusername("somashekar.raghu@gmail.com")


        
    })



})