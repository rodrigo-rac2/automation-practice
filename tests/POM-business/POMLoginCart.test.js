module.exports = {
    'Logged in, add one product to cart and check': function (browser) {

        browser.url("http://automationpractice.com")

        let mainPage = browser.page.MainPage()
        mainPage
            .navigateToLoginPage()
            .loginWith(browser, "rich.customer@test.com","Password1234")
            .navigateToMainPage(browser)
            .selectFirstProduct(browser)
            .addProductToCart(browser)
            .proceedToCheckOut(browser)
            .verifyNumberofProductsInCartIs(1)

        browser.end()
    }
}
