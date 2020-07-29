var actions = {
    clickAddToCartButton: function () {
        return this
            .useXpath()
            .waitForElementVisible("//p[@id='add_to_cart']/button", 10000)
            .click("//p[@id='add_to_cart']/button")
            .useCss()
    }
}
var checks = {
    assertPageIsLoaded: function () {
        //TODO
    }
}

module.exports = {
    commands: [actions, checks],
    elements: {
    }
}