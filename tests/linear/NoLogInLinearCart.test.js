module.exports = {
    'Not logged in, add one product to cart and check': function (browser) {
        browser
            .url("http://automationpractice.com/")
            // select the first product
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