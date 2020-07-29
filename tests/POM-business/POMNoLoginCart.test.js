module.exports = {
    'Not logged in, add one product to cart and check': function (browser) {

        browser.url("http://automationpractice.com")

        let mainPage = browser.page.MainPage()
        mainPage
            .selectFirstProduct(browser)
            .addProductToCart(browser)
            .proceedToCheckOut(browser)
            .verifyNumberofProductsInCartIs(1)

        browser.end()
    }
}