module.exports = {
    'Simple login and check': function (browser) {

        browser.url("http://automationpractice.com")

        let mainPage = browser.page.MainPage()
        mainPage
            .navigateToLoginPage()
            .loginWith(browser, "rich.customer@test.com", "Password1234")

        mainPage.assertUserLoggedIn("Very Rich Person")

        browser.end()
    }
}