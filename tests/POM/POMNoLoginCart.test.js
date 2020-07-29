module.exports = {
    'Not logged in, add one product to cart and check': function (browser) {

        let mainPage = browser.page.MainPage()
        mainPage.navigate()

        //navigate back to home page and click the first product
        mainPage.selectProductById(browser, 1)

        // add it to the cart
        let productDetailsPage = browser.page.ProductDetailsPage()
        productDetailsPage.clickAddToCartButton()

        //checkout
        let checkOutConfirmationPopUp = browser.page.CheckOutConfirmationPopUp()
        checkOutConfirmationPopUp.clickProceedToCheckOut()

        // verify if there's only 1 item in the shopping cart
        let checkOutPage = browser.page.CheckOutPage()
        checkOutPage.assertProductAmount(1)

        browser.end()
    }
}