var actions = {
    clickAddToCartButton: function () {
        return this
            .useXpath()
            .waitForElementVisible("//p[@id='add_to_cart']/button", 10000)
            .click("//p[@id='add_to_cart']/button")
            .useCss()
    },
    addProductToCart: function(browser) {
        this.clickAddToCartButton()
        return browser.page.CheckOutConfirmationPopUp()
    }
}
var checks = {
    assertPageIsLoaded: function () {
    }
}

module.exports = {
    commands: [actions, checks],
    elements: {
    }
}