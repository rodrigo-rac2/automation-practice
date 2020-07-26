module.exports = {
    'Simple search': function (browser) {
        browser
            .url("http://automationpractice.com/")
            //navigate to login page
            .click('a.login')
        //login
        // .waitForElementVisible('#email', 5000)
        // .setValue('#email', "petejenkins@test.com")
        // .setValue('#passwd', "Password1234")
        // .click('#SubmitLogin')
        let login = browser.page.Login()
        login
            .assertPageIsLoaded()
            .setEmail("petejenkins@test.com")
            .setPassword("Password1234")
            .clickSignInButton()
        //navigate back to home page
        browser
            .waitForElementVisible('a.home', 5000)
            .click('a.home')
            // select the first product
//            .click('a.product-name[0]')
            .url('http://automationpractice.com/index.php?id_product=1&controller=product')
            // add it to the cart
            .useXpath()
            .waitForElementVisible("//p[@id='add_to_cart']/button", 10000)
            .click("//p[@id='add_to_cart']/button")
            //checkout
            .waitForElementVisible("//a[@title='Proceed to checkout']", 5000)
            .click("//a[@title='Proceed to checkout']")
            // verify if there's only 1 item in the shopping cart
            .useCss()
            .assert.containsText('#summary_products_quantity', '1 Product')
            .end()
    }
}