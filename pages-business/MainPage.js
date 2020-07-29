var actions = {
    clickLoginButton: function () {
        return this
            .waitForElementVisible('@loginBtn', 5000)
            .click('@loginBtn')
    },
    returnToHome: function () {
        return this
            .waitForElementVisible('@homeBtn', 5000)
            .click('@homeBtn')
    },
    selectProductById: function (browser, id) {
        browser.url(`http://automationpractice.com/index.php?id_product=${id})&controller=product`)
        return browser.page.ProductDetailsPage()
    }, 
    loginWith: function (browser, email, password) {
        let login = browser.page.LoginPage()
        return login
            .setEmail(email)
            .setPassword(password)
            .clickSignInButton()
    },
    navigateToLoginPage: function() {
        return this.clickLoginButton()
    },
    selectFirstProduct: function(browser) {
        return this.selectProductById(browser, 1)
    },
}
var checks = {
    assertUserLoggedIn: function (userName) {
        return this
            .useXpath()
            .waitForElementVisible('//div[@class="header_user_info"]//a//span', 5000)
            .assert.containsText('//div[@class="header_user_info"]//a//span', userName)
            .useCss()
    }
}

module.exports = {
    url: "http://automationpractice.com/",
    commands: [actions, checks],
    elements: {
        loginBtn: 'a.login',
        homeBtn: 'a.home',
        signInButton: '#SubmitLogin'
    }
}