module.exports = {
    'Simple login and check': function (browser) {

        let mainPage = browser.page.MainPage()
        mainPage
            .navigate()
            .clickLoginButton()

        //login
        let login = browser.page.LoginPage()
        login
            .assertPageIsLoaded()
            .setEmail("rich.customer@test.com")
            .setPassword("Password1234")
            .clickSignInButton()

        //assert that the user is logged in
        mainPage.assertUserLoggedIn("Very Rich Person")

        browser.end()
    }
}