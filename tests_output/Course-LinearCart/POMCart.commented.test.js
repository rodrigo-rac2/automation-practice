module.exports = {
    'Simple search': function (browser) {
        // browser
        //     .url("http://automationpractice.com/")
        //     //navigate to login page
        //     .click('a.login')
        let mainPage = browser.page.MainPage()
        mainPage
            .navigate()
            .clickLoginButton()
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
        // browser
        //     .waitForElementVisible('a.home', 5000)
        //     .click('a.home')
        //     // select the first product
        //     .url('http://automationpractice.com/index.php?id_product=1&controller=product')
        mainPage
            .returnToHome()
            .selectProductById(browser, 1)
        // add it to the cart
        let productDetailsPage = browser.page.ProductDetails()
        productDetailsPage
            .clickAddToCartButton()
        // .useXpath()
        // .waitForElementVisible("//p[@id='add_to_cart']/button", 10000)
        // .click("//p[@id='add_to_cart']/button")
        //checkout
        let checkOutConfirmationPopUp = browser.page.CheckOutConfirmationPopUp()
        checkOutConfirmationPopUp
            .clickProceedToCheckOut()
        // browser
        //     .useXpath()
        //     .waitForElementVisible("//a[@title='Proceed to checkout']", 5000)
        //     .click("//a[@title='Proceed to checkout']")
        //     .useCss()
        // verify if there's only 1 item in the shopping cart
        let checkOutPage = browser.page.CheckOut()
        checkOutPage.assertProductAmount(1)
        // browser
        // .assert.containsText('#summary_products_quantity', '1 Product')
        browser
            .end()
    }
}