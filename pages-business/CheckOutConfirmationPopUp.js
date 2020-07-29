var actions = {
    clickProceedToCheckOut: function () {
        return this
            .useXpath()
            .waitForElementVisible("//a[@title='Proceed to checkout']", 10000)
            .click("//a[@title='Proceed to checkout']")
            .useCss()
    },
    proceedToCheckOut: function(browser) {
        this.clickProceedToCheckOut()
        
        let checkOutPage = browser.page.CheckOutPage()
        return checkOutPage
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