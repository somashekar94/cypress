class Login
{
    loginbtn()
   {
    cy.xpath("//div[@class='uicore-nav-menu']//a[@class='uicore-btn ']").click({force: true})
   }
   setusername(username)
   {
    cy.xpath("//input[@type='email']").type(username)
   }

}

export default Login;